'use strict'

// 78. Write a javascrirpt program to test whether an array of integers contains 30 and 40 twice. The array length should be 2

const test = (array)=>{
    return (array.length === 2)
    ? ((array[0] === 30 && array[1] === 30) || (array[0] === 40 && array[1] === 40)) 
        ?true:false
    :"The array must have 2 elements"
}

console.log(test([30,30]));
console.log(test([40,40]));
console.log(test([30,40]));