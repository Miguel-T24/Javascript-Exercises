'use strict'

// 64. Write a javascript function that takes a positive integer and reverse the binary representation of that integer. Finally return the decimal version of the binary string.

const decimalReverseBinary = (decimal) =>{
    let binary = decimal.toString(2);
    binary = binary.toString();
    binary = binary.split("").reverse().join("");
    decimal = parseInt(binary,2);

    return decimal;
}

console.log(decimalReverseBinary(100));
console.log(decimalReverseBinary(1134));