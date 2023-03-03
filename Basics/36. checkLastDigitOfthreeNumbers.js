'use strict'

// 36 write a javascript program to check whether the last digit of the three given positive integers is same

function checkLastDigit(num1, num2, num3){
    (num1.toString().slice(-1) === num2.toString().slice(-1) && num2.toString().slice(-1) === num3.toString().slice(-1) )
    ?console.log(`the last digits of the three of the numbers is the same`)
    :console.log(`The last digits of the three of the number isn't same`);
}

checkLastDigit(230, 520, 300);
checkLastDigit(201, 524, 305);
checkLastDigit(200, 520, 305);
checkLastDigit(205, 520, 300);
checkLastDigit(200, 525, 300);