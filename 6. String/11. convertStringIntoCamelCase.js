'use strict'

// 11. Write a javascript function to convert a string into camel case 

const camelize = (string) =>{
    string = string.split(" ")
    string = string.map(el => el[0].toUpperCase() + el.slice(1,))
    return string.join("");
}

console.log(camelize("Javascript Exercises"));
console.log(camelize("Javascript exercises"));
console.log(camelize("JavascriptExercises"));