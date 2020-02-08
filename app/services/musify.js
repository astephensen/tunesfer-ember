import Service from '@ember/service';
import fetch from 'fetch';
import Playlist from '../models/playlist';

export default class MusifyService extends Service {
  msuic = MusicKit.getInstance();

  /**
   * Fetches a playlist from Spotify and returns a Playlist object.
   *
   * @param {string} userID The ID of the user that created the playlist.
   * @param {string} playlistId The ID of the playlist.
   * @returns {Playlist} The fetched playlist.
   */
  async getPlaylist(userId, playlistId) {
    return fetch('/response.json').then((response) => {
      return response.json();
    }).then((json) => {
      return Playlist.create(json);
    });
  }
}
