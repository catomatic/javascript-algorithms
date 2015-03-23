// author: catomatic
// website: https://github.com/catomatic
// source: personal projects library

// Sieve of Eratosthenes

var removeMultiples = function(e, list, p) {
  if ((list[e] != p) && (list[e] % p == 0)) {
    var eIndex = list.indexOf(list[e]);
    list.splice(eIndex, 1);    
  }
}

var primeNumbers = function(num) {
  var primeList = [];

  for (i = 2; i < (num + 1); i++) {
    primeList.push(i);
  }

  var p = 2;

  for (i = 0; i <= num; i++) {
    removeMultiples(i, primeList, p);

    if (primeList[i] > p) {
      var p = primeList[i];
    }

    for (j = 0; j <= primeList.length; j++) {
      removeMultiples(j, primeList, p);
    }
  }

  return primeList;
}

console.log(primeNumbers(100));