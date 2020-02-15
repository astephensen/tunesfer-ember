import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PlaylistRoute extends Route {
  @service tunesfer;

  async model({ playlist_id: playlistId }) {
    try {
      const playlist = await this.tunesfer.getSpotifyPlaylist(playlistId);
      return { playlist };
    } catch {
      this.transitionTo('search').then((searchRoute) => {
        searchRoute.controller.set('error', 'Unable to load playlist');
      });
    }
  }

  setupController(controller) {
    super.setupController(...arguments);

    // Reset all tasks.
    controller.authorize.cancelAll({ resetState: true });
    controller.addPlaylist.cancelAll({ resetState: true });
    controller.processTrack.cancelAll({ resetState: true });
  }
}
