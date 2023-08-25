const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('Should return 8', () => {
      assert.strictEqual(calculateNumber('SUM', 3, 5), 8);
    });
    it('Should return 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 2.5), 4);
    });
    it('Should return 7', () => {
      assert.strictEqual(calculateNumber('SUM', 3.4, 4.3), 7);
    });
    it('Should return -8', () => {
      assert.strictEqual(calculateNumber('SUM', -3.3, -5.1), -8);
    });
    it('Should return NaN', () => {
      assert.strictEqual(calculateNumber('SUM', 'ab', 5), NaN);
    });
  });

  describe('SUBTRACT', () => {
    it('Should return -1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 2), -1);
    });
    it('Should return 3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.3, 2.2), 3);
    });
    it('Should return -5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -7.3, -2.2), -5);
    });
    it('Should return 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', '5.66', 2.0), 4);
    });
    it('Should return NaN', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 'xy', 2.3), NaN);
    });
    it('Should return NaN', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', [1, 3], 4, 2), NaN);
    });
    it('Should return NaN', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', { a: 5 }, 2.33), NaN);
    });
  });

  describe('DIVIDE', () => {
    it('Should return 3.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.4, 2.4), 3.0);
    });
    it('Should return 3.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6.4, -2.4), 3.0);
    });
    it('Should return Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.3, 0.4), 'Error');
    });
    it('Should return 5.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.6, '2.4'), 5.5);
    });
    it('Should return NaN', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.6, 'xy'), NaN);
    });
  });
});
