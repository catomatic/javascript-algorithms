// author: catomatic
// website: https://github.com/catomatic
// source: personal projects library

var fibonacci = function(num) {
  var s0 = 0;
  var s1 = 1;
  var fibList = [];
  if (num > 1) {
    for (i = 0; i < num + 1; i++) {
      s0 = s0 + s1;
      s1 = s0 - s1;
      fibList.push(s1);
    }
  } else {
    return 'Must be greater than 1.'
  }
  for (i = fibList.length - 1; i >= 0; i--) {
    console.log(' '+fibList[i]);
  }
}

var negafibonacci = function(num) {
  var s0 = 0;
  var sn1 = -1;
  var fibNegList = [];
  if (num < 1) {
    for (i = 0; i > num; i--) {
      s0 = sn1 - s0;
      sn1 = s0 + sn1;
      fibNegList.push(s0);
    }
  } else {
    return 'Must be greater than 1.'
  }
  for (i = 0; i < fibNegList.length; i++) {
    console.log(fibNegList[i]);
  }
}

fibonacci(13);
negafibonacci(-13);