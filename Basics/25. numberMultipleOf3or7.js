'use strict'

// 25. Write a javascript program to check wheter a given positiove number is multiple of 3 or a mutiple of 7.

let number = parseInt(prompt("Enter number: "))

if(number % 3 === 0){
    console.log(`The number ${number} is multiple of 3`);
}else if(number % 7 === 0){
    console.log(`The number ${number} is multiple of 7`);
}else{
    console.log(`The number entered isn't multiple of 3 or 7`);
}