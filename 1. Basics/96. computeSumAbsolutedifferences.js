'use strict'

// 96. Write a javascript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.

const differenceConsecutiveIntegers = (array) =>{
    for (let i in array){
        if(i != 0){
            array[i-1] = Math.abs(array[i-1] - array[i]);
        }
    }
    array = array.slice(0,-1);
    return array.reduce((x , y) => x + y);
}


console.log(differenceConsecutiveIntegers([1,2,3,2,-5])); 