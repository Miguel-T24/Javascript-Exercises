'use strict'

// 37. Write a javascirpt function to create specified number of elements with pre-filled string value array

const array_filled = (amount, string) =>{
    let array = [];
    for(let i =0;i<amount;i++){
        array.push(string)
    }
    return array;
}

console.log(array_filled(3,"Default String"));
console.log(array_filled(4,"Password"));