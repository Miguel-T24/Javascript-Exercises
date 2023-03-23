'use strict'

// 150. Write a javascript program to swap pairs of adjacent digit of a given integer of even length.

const swapPairs = (array) =>{
    for(let i = 0; i< array.length; i++){
        if(i != 0){
            [array[i-1], array[i]] = [array[i] , array[i-1]]
            i++;
        }
    }

    return array;
}

console.log(swapPairs([1,2,3,4]));