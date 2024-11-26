var main = require('../index');
var assert = require('assert');
describe('Regular factorial value', function() {
    it('should return 24 for Fact(4) ', function() {
        assert.strictEqual(main.factorial(4), 24);
      });
});

describe('First two terms', function() {
  it('should return 1 and 1 for first two terms', function() {
      assert.strictEqual(main.factorial(0), 1);
      assert.strictEqual(main.factorial(1), 1);
    });
});

describe('Negative', function() {
  it('should return Factorial for negative number is not defined!', function() {
        assert.strictEqual(main.factorial(-1), 'Factorial for negative number is not defined!');
    });
});