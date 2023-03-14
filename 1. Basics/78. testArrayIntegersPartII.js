'use strict'

// 78. Write a javascirpt program to test whether an array of integers of length 2 does not contain 1 or 3

const test = (array) =>{
    return (array.length === 2)
    ?(array.includes(1) || array.includes(3))
        ? false
        : true
    :"The array must have 2 element"
}

console.log(test([1,3]));
console.log(test([5,3]));
console.log(test([3,5]));
console.log(test([5,4]));