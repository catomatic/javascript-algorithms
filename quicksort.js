// author: catomatic
// website: https://github.com/catomatic
// source: personal projects library

var quickSort = function(someList) {
  var listLen = someList.length;
  if (listLen > 1) {
    var pivot = someList[Math.floor(listLen / 2)];
    var less = [];
    var equal = [];
    var greater = [];

    for (i = 0; i < listLen; i++) {
      if (someList[i] < pivot) {
        less.push(someList[i]);
      } else if (someList[i] == pivot) {
        equal.push(someList[i]);
      } else if (someList[i] > pivot) {
        greater.push(someList[i]);
      }
    }

    var less = quickSort(less);
    var greater = quickSort(greater);
    return less.concat(equal, greater);
  } else {
    return someList;
  }
}

var numList = [2, 6, 1, 9, 7, 5, 8, 3, 4];
var wordList = ['orange', 'flying squirrel', 'banana', 'grapes', 'bob'];

console.log(quickSort(numList));
console.log(quickSort(wordList));