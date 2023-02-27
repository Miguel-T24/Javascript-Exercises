'use strict'

// 27. Write a javascript program to check whether a string starts with 'Java' and false otherwise.

let str  = prompt("Enter String: ")

if (str.substring(0,4).toLowerCase() === "java"){
    console.log(`You string Start with Java`);
}else{
    console.log(false);
}