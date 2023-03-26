'use strict'

// 2. Write a javascript function to convert a binary number to a decimal numbers

const binDec = (num)=>{
    return parseInt(num + '', 2).toString(10);
}

console.log(binDec('110011'));
console.log(binDec('100'));