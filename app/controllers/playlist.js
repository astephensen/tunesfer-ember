import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { task, all } from 'ember-concurrency';
import { TrackItemState } from '../models/track-item';

export default class PlaylistController extends Controller {
  @service tunesfer;

  /**
   * Task to authorize the user with Apple Music.
   */
  @(task(function *() {
    yield this.tunesfer.authorize();
    this.notifyPropertyChange('isAuthorized');
  })) authorize;

  /**
   * Task to add the playlist to the user's library.
   */
  @(task(function *() {
    if (!this.tunesfer.isAuthorized) {
      throw new Error('The user is unauthorized!');
    }

    // Check if the playlist exists in the library.
    let playlist = yield this.tunesfer.findPlaylist(this.model.playlist.name);
    if (!playlist) {
      playlist = yield this.tunesfer.createPlaylist(this.model.playlist.name);
    } else {
      // Fetch the full playlist.
      playlist = yield this.tunesfer.getPlaylist(playlist.id);
    }

    // Create tasks for each of the tracks.
    let tasks = this.model.playlist.tracks.items.map((trackItem => {
      trackItem.state = TrackItemState.IDLE;
      trackItem.task = this.processTrack.perform(trackItem, playlist);
      return trackItem.task;
    }));

    // Wait for it all to complete.
    yield all(tasks);
  })).restartable() addPlaylist;

  /**
   * Task to add a track to a playlist.
   */
  @(task(function * (trackItem, playlist) {
    trackItem.state = TrackItemState.PROCESSING;

    // Find the track.
    const track = yield this.tunesfer.findSpotifySong(trackItem.track);
    if (!track) {
      trackItem.state = TrackItemState.NOT_FOUND;
      return;
    }

    // See if the track already exists in the playlist.
    const existingTrack = playlist.tracks.find((playlistTrack) => {
      return track.attributes.name === playlistTrack.attributes.name;
    });
    if (existingTrack) {
      trackItem.state = TrackItemState.SKIPPED;
      return;
    }

    // Add the track to the playlist.
    try {
      const result = yield this.tunesfer.addSongToPlaylist(track, playlist);
      if (!result) {
        trackItem.state = TrackItemState.FAILED;
        return;
      }
      trackItem.state = TrackItemState.DONE;
    } catch {
      trackItem.state = TrackItemState.FAILED;
    }
  })).enqueue() processTrack;

  @action
  cancel() {
    this.addPlaylist.cancelAll();
    this.processTrack.cancelAll();

    // Reset track state.
    for (const trackItem of this.model.playlist.tracks.items) {
      if (trackItem.state === TrackItemState.IDLE || trackItem.state === TrackItemState.PROCESSING) {
        trackItem.state = TrackItemState.CANCELLED;
      }
    }
  }
}
