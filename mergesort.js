// author: catomatic
// website: https://github.com/catomatic
// source: personal projects library

var mergeSort = function(someList) {
  var listLen = someList.length;
  if (listLen > 1) {
    var midPt = listLen / 2;
    var left = someList.slice(0, midPt);
    var right = someList.slice(midPt, listLen);
    var left = mergeSort(left);
    var right = mergeSort(right);
    return merge(left, right);
  } else {
    return someList;
  }
}

var merge = function(left, right) {
  var result = [];

  while ((left.length > 0) && (right.length > 0)) {
    if (left[0] <= right[0]) {
      result.push(left[0]);
      var left = left.slice(1, left.length);
    } else {
      result.push(right[0]);
      var right = right.slice(1, right.length);
    }
  }

  while (left.length > 0) {
    result.push(left[0]);
    var left = left.slice(1, left.length);
  }

  while (right.length > 0) {
    result.push(right[0]);
    var right = right.slice(1, right.length);
  }
  return result;
}

var numList = [2, 6, 1, 9, 7, 5, 8, 3, 4];
var wordList = ['orange', 'flying squirrel', 'banana', 'grapes', 'bob'];

console.log(mergeSort(numList));
console.log(mergeSort(wordList));