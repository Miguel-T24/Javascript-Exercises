'use strict'    

// 4. Write a javascript program to compute the sum of an array of integers

const sumArray = (array) =>{
    if (array.length === 1) {
        return array[0];
      }
      else {
        return array.pop() + sumArray(array);
      }
}

console.log(sumArray([1,2,3,4,5,6]));