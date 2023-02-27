'use strict'

// 22. Write a javascript program to remove a character at the specified position of a given string and return the new string.

let string = prompt("Enter string: ");
let position = parseInt(prompt("Enter position to remove: "));

string = string.substring(0,position) + string.substring(position + 1,);

console.log(string);