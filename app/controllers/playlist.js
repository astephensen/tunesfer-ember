import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { task, all } from 'ember-concurrency';
import { TrackItemState } from '../models/track-item';

export default class PlaylistController extends Controller {
  @service musify;

  @(task(function *() {
    const result = yield this.musify.authorize();
    if (!result) {
      return;
    }

    // Check if the playlist exists in the library.
    let playlist = yield this.musify.findPlaylist(this.model.playlist.name);
    if (!playlist) {
      playlist = yield this.musify.createPlaylist(this.model.playlist.name);
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

  @(task(function * (trackItem, playlist) {
    trackItem.state = TrackItemState.PROCESSING;

    // Find the track.
    const track = yield this.musify.findSpotifySong(trackItem.track);
    if (!track) {
      trackItem.state = TrackItemState.NOT_FOUND;
      return;
    }

    // TODO: See if the track already exists in the playlist.

    // Add the track to the playlist.
    try {
      const result = yield this.musify.addSongToPlaylist(track, playlist);
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
