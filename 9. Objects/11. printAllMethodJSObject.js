'use strict'

// 11. Write a javascript function to print all the methods in an javascript object

const objectMethod = (object) =>{
    return Object.getOwnPropertyNames(object);
}


console.log(objectMethod(Math));
console.log(objectMethod(Array));