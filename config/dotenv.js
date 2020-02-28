/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: ['AM_DEVELOPER_TOKEN'],
    fastbootAllowedKeys: ['AM_DEVELOPER_TOKEN'],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env')
  }
};
