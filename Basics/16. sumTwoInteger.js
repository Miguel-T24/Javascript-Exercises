'use strict'

// 16. Write a Javascript program to compute the sum of the twi given integers. if the twi values are same returns triple their sum

let num1 = parseInt(prompt("First Number: "));
let num2 = parseInt(prompt("Second Number: "));

if(num1 === num2){
    console.log(num1 * 2 * 3);
}else{
    console.log(num1 + num2);
}