'use strict'

// 30 Write a javascript function to merge two arrays and removes all duplicates elements

const mergeArrayRemoveDup = (arr1,arr2) =>{
    let result = arr1.concat(arr2);
    result = new Set(result);

    return result = Array.from(result);
}


console.log(mergeArrayRemoveDup([1,2,3],[2,30,1]));