'use strict'

// 73. Qrite a javascript program to reverse the elements of given array of integers length 3

const reversee = (array) =>{
    return (array.length >=3)
    ? array.reverse()
    : "The array isn't greater than 3" 
}

console.log(reversee([1,2,3]));