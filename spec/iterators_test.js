var expect = require('chai').expect;
var Iterators = require('../iterators.js');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });

  describe('#min', function () {

    var myArr;

    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it('should return the minimum in an array', function () {
      expect(Iterators.min(myArr)).to.equal(22);
    });
    it('should return Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(-Infinity);
    });
  });
  describe('#each', function () {

    var myArr;

    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    var addTwo = function(a){
      return a+2;
    };

    it('should return each item with 2 added to it', function () {
      expect(Iterators.each(myArr)).to.eql([68,24.69,36]);
    });
    it('should return an empty array for empty array', function () {
      myArr = [];
      expect(Iterators.each(myArr, addTwo)).to.eql([]);
    });
  });
  describe('#map', function () {

    var myArr;

    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    var addTwo = function(a){
      return a+2;
    };
    var multiplyByTwo = function(a){
      return a*2;
    };
    it('should return each item with 2 added to it', function () {
      expect(Iterators.map(myArr)).to.eql([68,24.69,36]);
    });
    it('should return an empty array for empty array', function () {
      myArr = [];
      expect(Iterators.map(myArr, addTwo)).to.eql([]);
    });
    it('should return each item with 2 multiplied by to it', function () {
      expect(Iterators.map(myArr, multiplyByTwo)).to.eql([132,44.134,72]);
    });
  });
  describe('#reduce', function () {

    var myArr;

    beforeEach(function () {
      myArr = [3,4,5,-8];
    });

    var add = function(a,b){
      return a+b;
    };
    it('should return each item with 2 added to it', function () {
      expect(Iterators.reduce(myArr)).to.equal(4);
    });
    it('should return an empty array for empty array', function () {
      myArr = [];
      expect(Iterators.reduce(myArr, add)).to.eql([]);
    });
  });
  describe('#filter', function () {

    var myArr;

    beforeEach(function () {
      myArr = [3,4,5,-8];
    });

    var isEven = function(a){
      if(a % 2 == 0){
        return true;
      }
      else {
        return false;
      }
    };
    it('should return all even numbers in the array', function () {
      expect(Iterators.filter(myArr)).to.eql([4,-8]);
    });
    it('should return an empty array for empty array', function () {
      myArr = [];
      expect(Iterators.filter(myArr, isEven)).to.eql([]);
    });
  });
  describe('#reject', function () {

    var myArr;

    beforeEach(function () {
      myArr = [3,4,5,-8];
    });

    var isEven = function(a){
      if(a % 2 == 0){
        return true;
      }
      else {
        return false;
      }
    };
    it('should return all odd numbers in the array', function () {
      expect(Iterators.reject(myArr)).to.eql([3,5]);
    });
    it('should return an empty array for empty array', function () {
      myArr = [];
      expect(Iterators.reject(myArr, isEven)).to.eql([]);
    });
  });
});
