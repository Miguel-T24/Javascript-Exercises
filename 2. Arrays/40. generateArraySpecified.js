'use strict'

// 40. Write a javascirpt function to generate an array of specified length, filled, with integer numbers, incrase by one from starting position

const array_range = (start, amount) =>{

    let array = [];
    for(let i = 0 ; i < amount ; i++){
        array.push(start);
        start++;
    }

    return array;
}

console.log(array_range(1,4));
console.log(array_range(-6,4));

