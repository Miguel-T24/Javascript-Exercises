'use strict'

// 17. Write a javascript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19

let num = parseInt(prompt("Enter number: "))

if (num === 19){
    console.log(`The number is 19`);
}else if(num < 19){
    console.log(19 - num);
}else{
    console.log((num - 19) * 3);
}