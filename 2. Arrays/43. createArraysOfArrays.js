'use strict'

// 43.  Write a javascirpt function to create an arrays of arrays, ungrouping the elemnts in an array produced by zip

const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );
console.log(unzip([['a', 1, true], ['b', 2, false]]));
console.log(unzip([['a', 1, true], ['b', 2]]));