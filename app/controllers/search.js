import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SearchController extends Controller {
  @action
  loadPlaylist(playlistUrl) {
    // Validate the URL.
    const result = playlistUrl.match(/playlist\/(.*)\?/);
    if (!result || result.length !== 2) {
      // TODO: Inform the user.
      return;
    }
    const [ , playlistId ] = result;
    this.transitionToRoute('playlist', playlistId);
  }

  @action
  randomPlaylist() {
    this.transitionToRoute('playlist', '4Qqc4lX4i4A8uXD9SBQy7S');
  }
}
