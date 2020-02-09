import { helper } from '@ember/component/helper';

export default helper(function formatSpotifyDescription([ description ]) {
  // Convert Spotify playlist links to Musify ones.
  const formattedDescription = description.replace(/spotify:playlist:/g, '/');
  return formattedDescription;
});
