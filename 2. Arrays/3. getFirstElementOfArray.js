'use strict'

// 3. Qrite a javascript function to get the first ellement of an array. Passing a parameter n will return the first n elements of the array

const firstNelements = (array, n = 1) =>{
    return array.slice(0,n);
}

console.log(firstNelements([7,9,0,-2]));
console.log(firstNelements([] , 3));
console.log(firstNelements([7,9,0,-2], 3));