'use strict'

// 43. Write a javasciprt funciton to test whether the character at the provided (charcater) index is uppercase.


const textcharUpperCase = (string,pos) =>{
    return (string[pos] === string[pos].toUpperCase())
}

console.log(textcharUpperCase('Js STRING EXERCISES', 1));
console.log(textcharUpperCase('Js STRING EXERCISES', 3));