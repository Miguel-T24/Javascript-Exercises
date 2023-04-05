'use strict'

// 45. Write a javascript program yo find all unique values in an given array of numbers

const uniqueV = (array) =>{
    return Array.from(new Set(array));
}

console.log(uniqueV([1, 2, 2, 3, 4, 4, 5]));