'use strict'

// 48. Write a javascript program that takes an array of integers and returns false if every number is not prime.

const prime =(array) =>{
    return array.every(el => !(el === 1 || el > 2 && el % 2 === 0))
}

console.log(prime([2,3,5,7]));
console.log(prime([2,3,5,7,8]));