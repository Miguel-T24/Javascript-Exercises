'use strict'

// 4. Write a javasciprt function to get the last element of an array. Passinf a parameter 'n' will return the last 'n' elements of the array

const lastElement = (array , n = 0) =>{
    array = array.reverse();
    array = array.slice(0,n)
    return array.reverse();
}

console.log(lastElement([7,9,0,-2]));
console.log(lastElement([7,9,0,-2],3));
console.log(lastElement([7,9,0,-2],6));