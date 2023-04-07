'use strict'

// 44. Write a javascript function to test whether the character at the provided (character) index is upper case.

const textcharUpperCase = (string,pos) =>{
    return (string[pos] === string[pos].toLowerCase())
}

console.log(textcharUpperCase('Js STRING EXERCISES', 1));
console.log(textcharUpperCase('Js STRING EXERCISES', 3));