'use strict'

// 15. Write a javascript program to get the differece bewteen a given number and 13, if the number is greater than 13 return double the absolute difference

let num = parseInt(prompt("Give a  number: "))

if (num === 13){
    console.log(`The number es 13`);
}else if(num < 13){
    console.log(`The Difference is ${13 - num}`);
}else{
    console.log(`The double the absolute difference is ${(num - 13) * 2}`);
}