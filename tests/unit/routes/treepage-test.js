import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | treepage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:treepage');
    assert.ok(route);
  });
});
