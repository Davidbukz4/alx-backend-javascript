const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('Should return 8', () => {
      expect(calculateNumber('SUM', 3, 5)).to.equal(8);
    });
    it('Should return 4', () => {
      expect(calculateNumber('SUM', 1, 2.5)).to.equal(4);
    });
    it('Should return 7', () => {
      expect(calculateNumber('SUM', 3.4, 4.3)).to.equal(7);
    });
    it('Should return -8', () => {
      expect(calculateNumber('SUM', -3.3, -5.1)).to.equal(-8);
    });
  });

  describe('SUBTRACT', () => {
    it('Should return -1', () => {
      expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
    });
    it('Should return 3', () => {
      expect(calculateNumber('SUBTRACT', 5.3, 2.2)).to.equal(3);
    });
    it('Should return -5', () => {
      expect(calculateNumber('SUBTRACT', -7.3, -2.2)).to.equal(-5);
    });
    it('Should return 4', () => {
      expect(calculateNumber('SUBTRACT', '5.66', 2.0)).to.equal(4);
    });
  });

  describe('DIVIDE', () => {
    it('Should return 3.0', () => {
      expect(calculateNumber('DIVIDE', 6.4, 2.4)).to.equal(3.0);
    });
    it('Should return 3.0', () => {
      expect(calculateNumber('DIVIDE', -6.4, -2.4)).to.equal(3.0);
    });
    it('Should return Error', () => {
      expect(calculateNumber('DIVIDE', 1.3, 0.4)).to.equal('Error');
    });
    it('Should return 5.5', () => {
      expect(calculateNumber('DIVIDE', 10.6, '2.4')).to.equal(5.5);
    });
  });
});
