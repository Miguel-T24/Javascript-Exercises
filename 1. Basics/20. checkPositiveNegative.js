'use strict'

let num = parseInt(prompt("Enter number: "));

if (num === 0){
    console.log(`Number is 0`);
}else if(num < 0){
    console.log(`The number is negative`);
}else{
    console.log(`The number is Positive`);
}