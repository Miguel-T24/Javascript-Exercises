'use strict'

// 47. Write a javascirpt function to test whether a string ends with a specified string

const testStringEnd = (string, end) =>{
    return (string.slice(string.length - end.length , ) === end);
}

console.log(testStringEnd("SJ String exercises", "exercises"));