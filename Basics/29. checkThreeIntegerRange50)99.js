'use strict'

// 29. Write a javascript program to check whether three given integer values are in the range 50 - 99 (inclusive). Return true if one or more of them are in the said range

let num1 = prompt("Enter number: ");
let num2 = prompt("Enter number: ");
let num3 = prompt("Enter number: ");


function verfNumber(num){
    (num >= 50 && num <=99)?console.log(true)
    :console.log(false);
}

verfNumber(num1);
verfNumber(num2);
verfNumber(num3);