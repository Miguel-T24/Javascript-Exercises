'use strict'

// 21. Write a javascript program to flatten a nested (any depth) array. If you pass shallow, the array will only be falttened a single level

const flatten = (array, single = false) =>{
    return (single===true)?array.flat():array.flat(Infinity);
}

console.log(flatten([1,[2],[3,[[4]]],[5,6]]));
console.log(flatten([1,[2],[3,[[4]]],[5,6]] , true));