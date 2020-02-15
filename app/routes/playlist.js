import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PlaylistRoute extends Route {
  @service musify;

  async model({ playlist_id: playlistId }) {
    const playlist = await this.musify.getPlaylist(playlistId);
    return { playlist };
  }

  setupController(controller) {
    super.setupController(...arguments);

    // Reset all tasks.
    controller.authorize.cancelAll({ resetState: true });
    controller.addPlaylist.cancelAll({ resetState: true });
    controller.processTrack.cancelAll({ resetState: true });
  }
}
