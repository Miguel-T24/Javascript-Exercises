'use strict'

// 95. Write a javascript program to replace all the numbers with a specified number of a given array of integers.

const replaceNumber  = (array , number) => {
    return array.fill(number);
}

console.log(replaceNumber([1,2,3,4,5], 10));