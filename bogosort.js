// author: catomatic
// website: https://github.com/catomatic
// source: personal projects library

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var knuthShuffle = function(someList) {
  var endRange = someList.length;
  for (i = 0; i < (endRange - 1); i++) {
    var j = getRandomInt(i, endRange);
    var x = someList[j];
    someList[j] = someList[i];
    someList[i] = x;
  }
  return someList;
}

var bogoSort = function(someList) {
  var count = 0;
  while (count < 1000) {
    for (i = 0; i < (someList.length - 1); i++) {
      while (someList[i] > someList[i + 1]) {
        knuthShuffle(someList);
      }
    }
    count += 1;
  }
  return someList;
}

// Probably won't sort
var longNumList = [2, 6, 1, 9, 7, 5, 8, 3, 4];

// Will almost always sort
var shortNumList = [2, 6, 1, 9];

// Probably won't sort
var longWordList = ['orange', 'flying squirrel', 'banana', 'grapes', 'bob', 'almonds', 'march', 'house', 'apple', 'blanket', 'cashew'];

// Will almost always sort
var shortWordList = ['orange', 'flying squirrel', 'banana', 'grapes', 'bob'];

// console.log(knuthShuffle(longNumList));
// console.log(knuthShuffle(longWordList));

console.log(bogoSort(longNumList));
console.log(bogoSort(shortNumList));
console.log(bogoSort(longWordList));
console.log(bogoSort(shortWordList));