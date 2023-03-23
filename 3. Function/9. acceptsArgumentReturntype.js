'use strict'

// 9. Write a javascript function wich accepts an argument and return the type

const types = (arg) =>{
    return typeof arg;
}

console.log(types("Hola"));
console.log(types(5));
console.log(types(true));
console.log(types({"Hello" : "World"}));