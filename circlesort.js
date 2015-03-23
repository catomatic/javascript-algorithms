// author: catomatic
// website: https://github.com/catomatic
// source: personal projects library

var circleSort = function(someList) {
  var listLen = someList.length;
  if (someList.length <= 1) {
    return someList;
  }

  var midPt = Math.floor(listLen / 2);
  var count = midPt;

  while (count > 0) {
    for (i = 0; i < midPt; i++) {
      if (someList[i] > someList[listLen - 1]) {
        var x = someList[i];
        someList[i] = someList[listLen - 1];
        someList[listLen - 1] = x;
      }
    }
    count -= 1;
  }
  var left = someList.slice(0, midPt);
  var right = someList.slice(midPt, listLen);

  var left = circleSort(left);
  var right = circleSort(right);
  return merge(left, right);
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

console.log(circleSort(numList));
console.log(circleSort(wordList));