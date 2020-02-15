import { helper } from '@ember/component/helper';

export default helper(function formatSpotifyDescription([ description ]) {
  // Convert Spotify playlist links to Tunesfer ones.
  const formattedDescription = description.replace(/spotify:playlist:/g, '/');
  return formattedDescription;
});
