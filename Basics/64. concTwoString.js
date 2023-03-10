'use strict'

// 64. Write a javascript program to concatenate two strings and return the result. If the length of the strings are not same then remove the three firts characters from the longer string.

const concStrings = (str1, str2) =>{
        return (str1.length === str2.length)
        ? str1 + str2
        : (str1.length > str2)
            ? str1.slice(3) + str2 : str1 + str2.slice(3)
}

console.log(concStrings("python" , "javascript"));