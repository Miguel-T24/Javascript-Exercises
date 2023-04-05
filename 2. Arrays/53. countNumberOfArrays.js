'use strict'

// 53. Write a javascirpt program to count the number of arrays inside a given array

const countArray = (array)=>{
    let count =0;

    for(let i in array){
        if(Array.isArray(array[i])){count +=1};
    }

    return count;
}

console.log(countArray([2,8,[6],3,3,5,3,4,[5,4]]));
console.log(countArray([2,8,[6,3,3],[4],5,[3,4,[5,4]]]));