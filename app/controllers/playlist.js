import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PlaylistController extends Controller {
  @action
  addPlaylist() {
    console.log('Add to Apple Music...');
  }
}
