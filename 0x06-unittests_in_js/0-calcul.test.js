const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('Should return 8', function () {
    assert.strictEqual(calculateNumber(3, 5), 8);
  });

  it('Should return -7', function () {
    assert.strictEqual(calculateNumber(-4, -3), -7);
  });

  it('Should return 3', function () {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('Should return -3', function () {
    assert.strictEqual(calculateNumber(-1.4, -2.4), -3);
  });

  it('Should return 6', function () {
    assert.strictEqual(calculateNumber(4.45, 2.43), 6);
  });
});
