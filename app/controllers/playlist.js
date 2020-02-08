import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PlaylistController extends Controller {
  @service musify;

  @action
  async addPlaylist() {
    const result = await this.musify.authorize();
    if (!result) {
      return;
    }
  }
}
