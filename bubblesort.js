// author: catomatic
// website: https://github.com/catomatic
// source: personal projects library

var bubbleSort = function(someList) {
  var count = someList.length;
  while (count > 0) {
    for (i = 0; i <= count; i++) {
      if (someList[i] > someList[i + 1]) {
        var x = someList[i];
        someList[i] = someList[i + 1];
        someList[i + 1] = x;
      }
    }
    count -= 1;
  }
  return someList;
}

var numList = [2, 6, 1, 9, 7, 5, 8, 3, 4];
var wordList = ['orange', 'flying squirrel', 'banana', 'grapes', 'bob'];

console.log(bubbleSort(numList));
console.log(bubbleSort(wordList));