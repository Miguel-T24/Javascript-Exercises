'use strict'

// 146. Write a javascript program to compute the sum of cubes of all integers from 1 to a given interger.

const computCubeSum = (num) =>{
    let sum = 0;
    for(let i = 0; i<=num; i++){
        sum += Math.pow(i,3);
    }
    return sum;
}

console.log(`The sum is ${computCubeSum(3)}`);
console.log(`The sum is ${computCubeSum(4)}`);