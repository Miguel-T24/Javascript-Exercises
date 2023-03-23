'use strict'

// 143.  Write a javascript program to sort string of given array of strings in the order of increasing lengths

const sortarray = (array) =>{
    for (let i = 0 ; i<array.length - 1; i++){
        for (let j = i + 1 ; j < array.length; j++){
            if(array[j].length < array[i].length){
                [array[i] , array[j]] = [array[j],array[i]];
            }
        }
    }

    return array;
}

console.log(sortarray(["xyz","acd","aa","bb","zzz","", "a","b"]));