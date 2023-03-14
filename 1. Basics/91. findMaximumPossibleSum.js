'use strict'

// 91. Write a javascript program to find the maximum possible sum of its k consecutive numbers (numbers that follow each other in order). of given array of positive integers.

const maxSumPossible = (array) =>{
    let max = 0;
    let sum = 0;
    for(let i in array){
        if(i!=0){
            sum = array[i] + array[i-1];
            max = sum>max?sum:max;
        }
    }
    return max;
}

console.log("The maximum possible sunm is: ",maxSumPossible([1,2,3,14,5]));