import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PlaylistRoute extends Route {
  @service musify;

  async model({ user_id: userId, playlist_id: playlistId }) {
    const playlist = await this.musify.getPlaylist(userId, playlistId);
    return { playlist };
  }
}
