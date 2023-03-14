'use strict'

// 28. Write a javascript program to check whether two given integer values are in the range 50 - 99 (inclusive). Return tru if either of them are the said range.

let num1 = prompt("Enter first number: ")
let num2 = prompt("Enter first number: ")

function verfNum(num){
        (num >= 50 && num <= 99)?console.log(true):console.log(false);
}

verfNum(num1);
verfNum(num2);