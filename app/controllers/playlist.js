import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { TrackItemState } from '../models/track-item';

export default class PlaylistController extends Controller {
  @service musify;

  @tracked
  processing = false;

  @action
  async addPlaylist() {
    const result = await this.musify.authorize();
    if (!result) {
      return;
    }

    // Update UI.
    this.processing = true;

    // Check if the playlist exists in the library.
    let playlist = await this.musify.findPlaylist(this.model.playlist.name);
    if (!playlist) {
      playlist = await this.musify.createPlaylist(this.model.playlist.name);
    }

    // Create tasks for each of the tracks.
    for (const trackItem of this.model.playlist.tracks.items) {
      trackItem.task = this.processTrack.perform(trackItem, playlist);
      trackItem.state = TrackItemState.IDLE;
    }
  }

  @action
  cancel() {
    this.processTrack.cancelAll();
  }

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
}
