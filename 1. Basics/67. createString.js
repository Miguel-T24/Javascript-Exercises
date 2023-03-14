'use strict'

// 67. Write a javascript program to create aa new string from a given string, removing the first and last character of the string if the first or last character are 'P'. Return the original string if the condition is nor satisfield


const createString = (str) => {
    return (str.slice(-1) === "P" || str.charAt(0) === "P")
    ? str.slice(1,-1)
    :str
}

console.log(createString("Python"));
console.log(createString("ythonP"));
console.log(createString("Javascript"));