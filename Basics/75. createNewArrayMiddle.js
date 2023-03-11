'use strict'

// 75. Write a javascript program to create a new array taking the middle elements of the two arrays of integer an each lenght 3


const middle = (array1, array2) =>{
    return [array1[1] , array2[1]]
}

console.log(middle([1,2,3] , [1,5,3]));