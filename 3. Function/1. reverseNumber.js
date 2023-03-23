'use strict'

// 1. Write a javascript function that reverse a number

const reverseNumber = (num) => {
    num = num.toString()
    return num.split("").reverse().join("");
}

console.log(reverseNumber(12345));
console.log(reverseNumber(6879));