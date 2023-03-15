'use strict'

// 100. Write a javascript program to check whether there is at least one element which occurs in two given sorted arrays of integers

const occurs = (array1, array2) =>{
    for(let i in array1){
        for(let j in array2){
            if(array1[i] === array2[j]){
                return true;
            }
        }
    }
    return false;
}
console.log(occurs([1,2,3], [3,4,5]));
console.log(occurs([1,2,3], [5,6,7]));