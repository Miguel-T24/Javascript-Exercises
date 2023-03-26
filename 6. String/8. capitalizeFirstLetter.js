'use strict'

// 8. Write a javascript function to capitalize the first letter of a stirng

const capitalize = (str)=>{
    return (str!="")?str[0].toUpperCase() + str.slice(1):"String is empty";
}

console.log(capitalize("hola mundo"));