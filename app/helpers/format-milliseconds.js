import { helper } from '@ember/component/helper';

export default helper(function formatMilliseconds([ milliseconds ]) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
});
