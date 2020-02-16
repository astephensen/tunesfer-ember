import Service from '@ember/service';
import fetch from 'fetch';
import Playlist from '../models/playlist';
import TrackItem from '../models/track-item';

const TUNESFER_API = 'https://api.tunesfer.com';
const APPLE_MUSIC_API = 'https://api.music.apple.com';

export default class TunesferService extends Service {
  musicKit = MusicKit.getInstance();

  /**
   * Indicates if the current user is authorized.
   */
  get isAuthorized() {
    return this.musicKit.isAuthorized
  }

  /**
   * Returns the headers required for a request.
   */
  get headers() {
    return {
      Authorization: `Bearer ${this.musicKit.api.developerToken}`,
      'Music-User-Token': this.musicKit.api.userToken
    }
  }

  /**
   * Authorizes the user with Apple Music.
   *
   * @returns {bool} A success flag.
   */
  async authorize() {
    try {
      await this.musicKit.authorize();
      return true;
    } catch {
      return false;
    } finally {
      this.notifyPropertyChange('isAuthorized');
    }
  }

  /**
   * Fetches a playlist from Spotify and returns a Playlist object.
   *
   * @param {string} playlistId The ID of the playlist.
   * @param {boolean} fetchAllTracks Indicates if all of the tracks should be fetched.
   * @returns {Playlist} The fetched playlist.
   */
  async getSpotifyPlaylist(playlistId, fetchAllTracks = false) {
    let requestUrl = `${TUNESFER_API}/playlist/${playlistId}`;
    if (fetchAllTracks) {
      requestUrl += '?fetchAllTracks=true';
    }
    return fetch(requestUrl).then((response) => {
      return response.json();
    }).then((json) => {
      const playlist = Playlist.create(json);
      playlist.tracks.items = playlist.tracks.items.map((trackItem) => TrackItem.create(trackItem))
      return playlist;
    });
  }

  /**
   * Searches for a playlist in the user's library with the passed in name.
   *
   * @param {string} name The name of the playlist to search for.
   * @returns {Object|null} The Apple Music playlist that was found or null if it wasn't.
   */
  async findPlaylist(name) {
    const searchResults = await this.musicKit.api.library.search(name, { types: 'library-playlists' });
    const foundPlaylist = searchResults['library-playlists'].data.find((playlist) => {
      return playlist.attributes.name.toLowerCase() === name.toLowerCase();
    });
    return foundPlaylist || null;
  }

  /**
   * Fetches a playlist and all of its songs from the user's library.
   *
   * @param {string} playlistId The id of the playlist to fetch.
   * @returns {Object|null} The Apple Music playlist or null if it couldn't be found.
   */
  async getPlaylist(playlistId) {
    const playlist = await this.musicKit.api.library.playlist(playlistId);
    if (!playlist) {
      return null;
    }

    // Fetch all of the tracks and add it as a new property in the playlist.
    let tracks = playlist.relationships.tracks.data;
    let next = playlist.relationships.tracks.next;
    while (next) {
      const result = await fetch(`${APPLE_MUSIC_API}/${next}`, {
        method: 'GET',
        headers: this.headers
      });
      const resultJSON = await result.json();
      tracks = tracks.concat(resultJSON.data);
      next = resultJSON.next;
    }
    playlist.tracks = tracks;

    return playlist;
  }

  /**
   * Creates a playlist.
   *
   * Note: We have to send a request instead of using MusicKit as there's no way of creating a playlist using the
   * library. MusicKit conveniently provides the required tokens.
   *
   * @param {string} name The name of the playlist.
   * @param {string} description The description of the playlist.
   * @returns {Object} An Apple Music playlist object.
   */
  async createPlaylist(name, description) {
    const result = await fetch(`${APPLE_MUSIC_API}/v1/me/library/playlists`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        attributes: {
          name,
          description
        }
      })
    });
    const resultJSON = await result.json();
    const playlist = resultJSON.data[0];
    playlist.tracks = []; // TODO: Create model?
    return playlist;
  }

  /**
   * Searches for a song based on a Spotify track object.
   *
   * @param {Object} track The Spotify track to search for.
   * @returns {Object|null} The Apple Music song object or null if one could not be found.
   */
  async findSpotifySong(track) {
    let albumName = track.album.name;
    let artistName = track.artists[0].name;
    let trackName = track.name;

    // Attempt to find the song based on all of the information presented.
    const fullSearchResult = await this.findSong(`${trackName}, ${artistName}, ${albumName}`);
    if (fullSearchResult) {
      return fullSearchResult;
    }

    // Attempt to find the song with just the track and artist.
    const trackArtistSearchResult = await this.findSong(`${trackName}, ${artistName}`);
    if (trackArtistSearchResult) {
      return trackArtistSearchResult;
    }

    // Try stripping anything following a hyphen in the track name.
    // This is usually "Remastered" or "Anniversary version".
    let hyphenIndex = trackName.indexOf('-');
    if (hyphenIndex !== -1) {
      let minimalTrackName = trackName.substring(0, hyphenIndex - 1);
      const minimalTrackArtistSearchResult = await this.findSong(`${minimalTrackName}, ${artistName}`);
      if (minimalTrackArtistSearchResult) {
        return minimalTrackArtistSearchResult;
      }
    }

    // Couldn't find it :(.
    return null;
  }

  /**
   * Searches for a song with a string.
   *
   * @param {string} query The song to search for.
   * @returns {Object} The Apple Music song object or null if one could not be found.
   */
  async findSong(query) {
    const result = await this.musicKit.api.search(query);
    if (result.songs && result.songs.data && result.songs.data[0]) {
      return result.songs.data[0];
    }
    return null;
  }

  /**
   * Adds a song to a playlist.
   *
   * @param {Object} song The song to add.
   * @param {Object} playlist The playlist to add the song to.
   */
  async addSongToPlaylist(song, playlist) {
    return this.addSongsToPlaylist([song], playlist)
  }

  /**
   * Adds multiple songs to a playlist.
   *
   * @param {Array[Object]} songs The songs to add.
   * @param {Object} playlist The playlist to add the song to.
   */
  async addSongsToPlaylist(songs, playlist) {
    return await fetch(`https://api.music.apple.com/v1/me/library/playlists/${playlist.id}/tracks`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.musicKit.api.developerToken}`,
        'Music-User-Token': this.musicKit.api.userToken
      },
      body: JSON.stringify({
        data: songs.map((song) => {
          return {
            id: song.id
          }
        })
      })
    });
  }
}
