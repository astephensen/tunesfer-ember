'use strict';

define("tunesfer/tests/integration/components/back-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | back-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <BackButton />
      */
      {
        id: "WupRKWNe",
        block: "{\"symbols\":[],\"statements\":[[5,\"back-button\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <BackButton>
              template block text
            </BackButton>
          
      */
      {
        id: "7yxcmCus",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"back-button\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("tunesfer/tests/integration/components/feedback-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | feedback-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <FeedbackButton />
      */
      {
        id: "x30GYxxU",
        block: "{\"symbols\":[],\"statements\":[[5,\"feedback-button\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <FeedbackButton>
              template block text
            </FeedbackButton>
          
      */
      {
        id: "kEs51Zzb",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"feedback-button\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("tunesfer/tests/integration/components/info-bar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | info-bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <InfoBar />
      */
      {
        id: "dB4T+LtU",
        block: "{\"symbols\":[],\"statements\":[[5,\"info-bar\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <InfoBar>
              template block text
            </InfoBar>
          
      */
      {
        id: "WtDmz0bk",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"info-bar\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("tunesfer/tests/integration/components/loading-indicator-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | loading-indicator', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <LoadingIndicator />
      */
      {
        id: "Txn2v8VL",
        block: "{\"symbols\":[],\"statements\":[[5,\"loading-indicator\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <LoadingIndicator>
              template block text
            </LoadingIndicator>
          
      */
      {
        id: "2tRJqksL",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"loading-indicator\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("tunesfer/tests/integration/components/music-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | music-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <MusicButton />
      */
      {
        id: "TMJmO40/",
        block: "{\"symbols\":[],\"statements\":[[5,\"music-button\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <MusicButton>
              template block text
            </MusicButton>
          
      */
      {
        id: "C06xxHqS",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"music-button\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("tunesfer/tests/integration/components/playlist-info-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | playlist-info', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <PlaylistInfo />
      */
      {
        id: "KQXtX/pr",
        block: "{\"symbols\":[],\"statements\":[[5,\"playlist-info\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <PlaylistInfo>
              template block text
            </PlaylistInfo>
          
      */
      {
        id: "3+6NB0EJ",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"playlist-info\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("tunesfer/tests/integration/components/track-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | track', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Track />
      */
      {
        id: "JlT1Ai6v",
        block: "{\"symbols\":[],\"statements\":[[5,\"track\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Track>
              template block text
            </Track>
          
      */
      {
        id: "zF6ThQqu",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"track\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("tunesfer/tests/integration/helpers/add-one-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | add-one', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{add-one inputValue}}
      */
      {
        id: "Izjitd6/",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"add-one\",[[24,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("tunesfer/tests/integration/helpers/format-milliseconds-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | format-milliseconds', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{format-milliseconds inputValue}}
      */
      {
        id: "m1BqshgH",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"format-milliseconds\",[[24,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("tunesfer/tests/integration/helpers/format-spotify-description-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | format-spotify-description', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{format-spotify-description inputValue}}
      */
      {
        id: "k112eHk+",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"format-spotify-description\",[[24,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("tunesfer/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/track.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/track.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/playlist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/playlist.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/search.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/add-one.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/add-one.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/format-milliseconds.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-milliseconds.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/format-spotify-description.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-spotify-description.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/musickit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/musickit.js should pass ESLint\n\n');
  });
  QUnit.test('models/playlist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/playlist.js should pass ESLint\n\n');
  });
  QUnit.test('models/track-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/track-item.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
  QUnit.test('routes/legacy-playlist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/legacy-playlist.js should pass ESLint\n\n');
  });
  QUnit.test('routes/playlist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/playlist.js should pass ESLint\n\n');
  });
  QUnit.test('routes/search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/search.js should pass ESLint\n\n');
  });
  QUnit.test('services/tunesfer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/tunesfer.js should pass ESLint\n\n');
  });
});
define("tunesfer/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('tunesfer/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tunesfer/templates/about.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('tunesfer/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tunesfer/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('tunesfer/templates/legacy-playlist.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tunesfer/templates/legacy-playlist.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('tunesfer/templates/playlist-loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tunesfer/templates/playlist-loading.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('tunesfer/templates/playlist.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tunesfer/templates/playlist.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('tunesfer/templates/search.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tunesfer/templates/search.hbs should pass TemplateLint.\n\n');
  });
});
define("tunesfer/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/back-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/back-button-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/feedback-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/feedback-button-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/info-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/info-bar-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/loading-indicator-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/loading-indicator-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/music-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/music-button-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/playlist-info-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/playlist-info-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/track-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/track-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/add-one-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/add-one-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/format-milliseconds-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/format-milliseconds-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/format-spotify-description-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/format-spotify-description-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/playlist-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/playlist-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/search-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/initializers/musickit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/musickit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/legacy-playlist-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/legacy-playlist-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/playlist-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/playlist-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/search-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/tunesfer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/tunesfer-test.js should pass ESLint\n\n');
  });
});
define("tunesfer/tests/test-helper", ["tunesfer/app", "tunesfer/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("tunesfer/tests/unit/controllers/playlist-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | playlist', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:playlist');
      assert.ok(controller);
    });
  });
});
define("tunesfer/tests/unit/controllers/search-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | search', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:search');
      assert.ok(controller);
    });
  });
});
define("tunesfer/tests/unit/initializers/musickit-test", ["tunesfer/initializers/musickit", "qunit"], function (_musickit, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Initializer | musickit', function (hooks) {
    hooks.beforeEach(function () {
      this.TestApplication = Ember.Application.extend();
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _musickit.initialize
      });
      this.application = this.TestApplication.create({
        autoboot: false
      });
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    }); // Replace this with your real tests.

    (0, _qunit.test)('it works', async function (assert) {
      await this.application.boot();
      assert.ok(true);
    });
  });
});
define("tunesfer/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("tunesfer/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("tunesfer/tests/unit/routes/legacy-playlist-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | legacy-playlist', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:legacy-playlist');
      assert.ok(route);
    });
  });
});
define("tunesfer/tests/unit/routes/playlist-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | playlist', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:playlist');
      assert.ok(route);
    });
  });
});
define("tunesfer/tests/unit/routes/search-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | search', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:search');
      assert.ok(route);
    });
  });
});
define("tunesfer/tests/unit/services/tunesfer-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | tunesfer', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:tunesfer');
      assert.ok(service);
    });
  });
});
define('tunesfer/config/environment', [], function() {
  var prefix = 'tunesfer';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('tunesfer/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
