const quicksort = function(arr) {
  if (!valid(arr)) {
    return 'invalid input';
  }
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  arr.slice(1).forEach(x => {
    if (x < pivot) {
      left.push(x);
    } else {
      right.push(x);
    }
  });
  left = quicksort(left);
  right = quicksort(right);
  return (left.concat([pivot]).concat(right));
};

function valid(arr) {
  let flag = true;
  if (!arr || arr.constructor !== Array) {
    flag = false;
  } else {
    arr.forEach(x => {
      if (typeof(x) !== 'number') {
        flag = false;
        return;
      }
    });
  }
  return flag;
}

module.exports = quicksort;
