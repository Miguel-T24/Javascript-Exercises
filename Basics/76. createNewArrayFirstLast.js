'use strict'

// 76. Write a javascript program to create a new array taking the first and last elements from given array integers and length must be grater or equal to 1

const firstLast = (array)=>{
    return (array.length > 1)
    ?[array[0],array.at(-1)]
    :false
}

console.log(firstLast([1,2,3]));
console.log(firstLast([50,2,3,78,9]));

