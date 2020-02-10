'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const postcssPresetEnv = require('postcss-preset-env');

// eslint-disable-next-line node/no-extraneous-require
const MergeTrees = require('broccoli-merge-trees');
// eslint-disable-next-line node/no-extraneous-require
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      exclude: ['logo.png'],
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'svg']
    },
    cssModules: {
      plugins: [
        postcssPresetEnv({
          stage: 3,
          features: {
            'nesting-rules': true
          }
        })
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  const appTree = app.toTree();

  return new MergeTrees([appTree, new Funnel(appTree, {
    files: ['index.html'],
    getDestinationPath: function() {
      return '404.html';
    }
  })]);
};
