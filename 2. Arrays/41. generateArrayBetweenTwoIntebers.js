'use strict'

// 41. Write a javasciprt function to genetrate an array between two integers of 1 step length.

const between = (initial, end) =>{
    let array = [];

    for(let i = initial ; i <= end ; i ++){
        array.push(i);
    }

    return array;
}

console.log(between(4,7));
console.log(between(-4,7));