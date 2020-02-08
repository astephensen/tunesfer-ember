import { helper } from '@ember/component/helper';

export default helper(function addOne([ value ]) {
  return value + 1;
});
