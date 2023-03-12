'use strict'

// 80. Write a javascript program to swap the first and last elements of given array of itegers. Tha array length should be at least 1


const swap = (array) => {
    return (array.length >= 1)
    ? (array.length === 1)
        ? array
        :[array.at(-1),...array.slice(1,-1),array[0]]
    :"The array must have at least one element";
}


console.log(swap([1,2,3,4]));
console.log(swap([0,2,1]));
console.log(swap([3]));
console.log(swap([]));