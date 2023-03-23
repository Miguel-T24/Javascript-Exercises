'use strict'

// Write a javascript program to swap two halves of a given array of integers of even length.

const swap = (array) =>{
    return [...array.slice(array.length/2 , ) , ...array.slice(0,array.length/2)];
}


console.log(swap([1,2,3,4,5,6]));
