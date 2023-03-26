'use strict'

// 7. Write a javascript function to parameterize a string

const parameterize = (str) =>{
    return (str != "")?str.split(" ").join("-"):"String is Empty";
}

console.log(parameterize("Hello World from javascript"));