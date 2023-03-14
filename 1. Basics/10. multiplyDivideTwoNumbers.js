'use strict'

// 10. Write a Javascript Program to calculate multiplication and division of two numbers (input from user)

let firstNumber = document.getElementById('n1');
let secondNumber = document.getElementById('n2');
const btnMultiply = document.getElementById('multiply-btn');
const btnDivide = document.getElementById('divide-btn');
let result = document.getElementById('value');

btnMultiply.addEventListener('click', () =>{
    let equal = parseInt(firstNumber.value) * parseInt(secondNumber.value)
    result.textContent = equal
})
btnDivide.addEventListener('click', () =>{
    let equal = parseInt(firstNumber.value) / parseInt(secondNumber.value)
    result.textContent = equal
})
