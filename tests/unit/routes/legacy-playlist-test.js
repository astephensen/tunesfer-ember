import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | legacy-playlist', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:legacy-playlist');
    assert.ok(route);
  });
});
