var main = require('../index');
var assert = require('assert');
describe('Regular factorial value', function() {
    it('should return 120 for fac(5)', function() {
        assert.strictEqual(main.fibonacci(5), 5);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.fibonacci(0), 0);
      assert.strictEqual(main.fibonacci(1), 1);
    });
});

describe('negtive', function(){
  it('should return undefined', function(){
    assert.strictEqual(main.fibonacci(-1), undefined);
  })
})