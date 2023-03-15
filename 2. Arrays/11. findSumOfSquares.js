'use strict'

// 11. Write a javascript program to find the sum of squares of numerica vector

const sumSquare = (array) =>{
    return array.reduce((x, y) => x + Math.pow(y,2))
}

console.log(sumSquare([0,1,2,3,4]));