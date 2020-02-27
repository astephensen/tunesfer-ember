/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: ['AM_DEVELOPER_KEY'],
    fastbootAllowedKeys: ['AM_DEVELOPER_KEY'],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env')
  }
};
