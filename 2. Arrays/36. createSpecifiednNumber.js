'use strict'

// 36. write a javaascript function to crate a specified number fo elements with pre-filled numeric value array

const array_filled = (amount, number) => {
    let array = []

    for(let i = 0 ; i<amount;i++){
        array.push(number);
    }

    return array;
}

console.log(array_filled(6,0));
console.log(array_filled(4,11));