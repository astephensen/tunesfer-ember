import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('search', { path: '/' });
  this.route('playlist', { path: ':playlist_id' });
  this.route('legacy-playlist', { path: ':user_id/playlist/:playlist_id' });
  this.route('about');
});
