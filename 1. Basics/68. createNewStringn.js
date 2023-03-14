'use strict'

// 68. Write a javascript program to create a new string using the first and last n characters from given string. The string lenght must be greater or equal to n.

const createString = (str,n) =>{
    return (str.length >= n)
    ? str.slice(0, n) + str.slice(-n)
    :"We can't do this operation"
}

console.log(createString("Javascript" , 2));
console.log(createString("Javascript" , 3));