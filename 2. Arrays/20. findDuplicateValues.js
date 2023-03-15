'use strict'

// 20. Write a javascript program to flatten a nested (any depth) array. if you pass shallow, the array will only be flattened a single level

const flatten = (array, infinity = false) => {
    return (infinity)?array.flat():array.flat(Infinity);
}

console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));