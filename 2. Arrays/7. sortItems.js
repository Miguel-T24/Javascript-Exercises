'use strict'

// 7. Write a javascirpt program to sort the items of an array

let array = [-3,8,7,6,5,-4,3,2,1];

const arrayResult = array.sort((a,b) => a < b ?-1:1)
console.log(arrayResult);