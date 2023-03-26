'use strict'

// 4. Write a javascript function to extract a specified number of characters from a string

const extract = (str,n) =>{
    return (str != "")?str.slice(0,n):"String is Empty";
}

console.log(extract("Hello",2));