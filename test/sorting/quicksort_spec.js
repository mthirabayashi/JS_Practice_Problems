var quicksort = require('../../lib/sorting/quicksort.js');
var expect = require('chai').expect;

describe('Quicksort', function() {
  describe('Smoke Tests', function() {
    it ('quicksort exists', function() {
      expect(quicksort).to.exist;
    });
    it ('quicksort is a function', function() {
      expect(quicksort).to.be.a('function');
    });
  });
  describe('Parameters', function() {
    it ('does not accept string inputs', function() {
      expect(quicksort('a')).to.eq('invalid input');
    });
    it ('does not accept number (not array) inputs', function() {
      expect(quicksort(5)).to.eq('invalid input');
    });
    it ('does not accept object inputs', function() {
      expect(quicksort({})).to.eq('invalid input');
    });
    it ('does not accept empty inputs', function() {
      expect(quicksort()).to.eq('invalid input');
    });
    it ('array must only contain numbers', function() {
      expect(quicksort(['a'])).to.eq('invalid input');
      expect(quicksort([5])).to.not.eq('invalid input');
    });
  });
  describe('Simple Sorting', function() {
    const sorted = [1,2,3];
    it ('sorts an empty array', function() {
      let empty = [];
      expect(isSorted(quicksort(empty))).to.eq(isSorted(empty));
    });
    it ('sorts an unordered array - [2,1,3]', function() {
      expect(isSorted(quicksort([2,1,3]))).to.eq(isSorted(sorted));
    });
    it ('sorts an unordered array - [3,2,1]', function() {
      expect(isSorted(quicksort([3,2,1]))).to.eq(isSorted(sorted));
    });
    it ('sorts an already ordered array - [1,2,3]', function() {
      expect(isSorted(quicksort(sorted))).to.eq(isSorted(sorted));
    });
  });
});

function isSorted(arr) {
  if (!arr) {
    return false;
  }
  let i = 0;
  while (i<arr.length-1) {
    let j = i+1;
    if (arr[i] > arr[j]) {
      return false;
    }
    i += 1;
  }
  return true;
}
