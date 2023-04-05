'use strict'

// 52. Write a javascript program to get all the indexes where NaN is found of a given array of numbers and NaN.

const indexNaN = (array) =>{
    let index = [];

    for (let i in array){
        if(isNaN(array[i])){
            index.push(i);
        }
    }
    return index;
}

console.log(indexNaN([2, NaN, 8, 16, 32]));
console.log(indexNaN([2, 4, NaN, 16, 32, NaN]));