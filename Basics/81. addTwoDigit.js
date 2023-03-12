'use strict'

// 81. Write a javascript program to add two digits of a given positive integer of length two

const addDigit = (num, twoDigit) =>{

    return (num.toString().length === 2 && twoDigit.toString().length === 2)
    ? parseInt(num.toString() + twoDigit.toString())
    : "The Numbers must be length 2"
}

console.log(addDigit(24,24));
console.log(addDigit(24,245));
console.log(addDigit(242,24));