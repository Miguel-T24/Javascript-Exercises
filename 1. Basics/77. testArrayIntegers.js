'use strict'

// 77. Write a javascript program to test whether an array of integers length 2 contains 1 or 3.

const test = (array)=>{
    return (array.length === 2)
    ?(array[0] === 1 || array[0] === 3 || array[1] === 1 || array[1] === 3)
        ? true:false
    : "The array must have 2 elements"
}

console.log(test([1,5]));
console.log(test([1,3]));
console.log(test([3,1]));
console.log(test([3,4]));
console.log(test([8,5]));
