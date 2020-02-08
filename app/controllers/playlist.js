import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

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

    // Kick off the processing.
    this.processing = true;
  }
}
