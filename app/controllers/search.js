import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { isBlank } from '@ember/utils';

const PLAYLIST_REGEX = /playlist\/([a-zA-Z0-9]+)/

export default class SearchController extends Controller {
  @tracked
  playlistUrl = '';

  @tracked
  error = null;

  get hasEnteredPlaylist() {
    return !isBlank(this.playlistUrl);
  }

  get playlistIsValid() {
    return PLAYLIST_REGEX.test(this.playlistUrl);
  }

  get hideInvalidLink() {
    return !this.hasEnteredPlaylist || this.playlistIsValid;
  }

  @action
  loadPlaylist(playlistUrl) {
    const result = playlistUrl.match(PLAYLIST_REGEX);
    if (!result || result.length !== 2) {
      return;
    }
    const [ , playlistId ] = result;
    this.transitionToRoute('playlist', playlistId);
  }

  @action
  validatePlaylist(event) {
    this.playlistUrl = event.target.value;
    // Clear any existing errors.
    this.error = null;
  }

  @action
  randomPlaylist() {
    this.transitionToRoute('playlist', '4Qqc4lX4i4A8uXD9SBQy7S');
  }
}
