'use strict'

// 3. Write a javascript function to split a string and convert it into an array of words.

const stringArray = (str)=>{
    return (str!="")?str.split(" "):"String is Empty";
}

console.log(stringArray("Hello World"));