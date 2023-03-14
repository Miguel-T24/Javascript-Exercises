'use strict'

// 24. Write a javascript program to create a new string from given string with the first character of the given string added at the front and back

let str = prompt("Enter string: ")

console.log(str.charAt(0) + str + str.charAt(0));