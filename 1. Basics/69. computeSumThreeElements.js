'use strict'

// 69. Qrite a javascript program to compute the sum of three elements of given array of integers of length 3

let array = [1,2,3];

let sum = array.reduce((a,b) => {
    return a+b
})
console.log(sum);