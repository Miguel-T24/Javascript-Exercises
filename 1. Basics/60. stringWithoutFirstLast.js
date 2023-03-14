'use strict'

// 60. Write a javascript program to create a new string without the first and last character of a given string


const fl = (str) => {
    return str.slice(1,str.length-1)
}

console.log(fl("Python"));

