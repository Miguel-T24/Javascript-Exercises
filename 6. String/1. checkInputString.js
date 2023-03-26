'use strict'

// 1. Write a javascript function to check whether an `input` is a string or not.

const checkString = (value) =>{
    return (typeof value === 'string')?true:false;
}

console.log(checkString("Hello"));
console.log(checkString(true));