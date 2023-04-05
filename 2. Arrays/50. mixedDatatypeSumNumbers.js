'use strict'

// 50. Write a javascirpt program that takes an array with mixed data type and calculate the sum of all numbers

const sumNumbers = (array) =>{
    array = array.filter(item => typeof item === 'number');
    return array.reduce((x,y) => x + y)
}

console.log(sumNumbers([2, "11", 3, "a2", false, 5, 7, 1]));
console.log(sumNumbers([2, 3, 0, 5, 7, 8, true, false]));