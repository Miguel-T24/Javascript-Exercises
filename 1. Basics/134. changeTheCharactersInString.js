'use strict'

// 134. Write a javascript program to change the characters (lower case) in a string wehre a turns into z, b turns into y, c turns into x, ... , n turns into m, m turns innto n,..., z turns into a.



const convert = (char, alphabet) => {
    return  alphabet.at(-(alphabet.indexOf(char) + 1));
}

let alphabet  = [];
for(let i = 97 ; i < 123 ; i++){
    alphabet.push(String.fromCharCode(i));
}

console.log(convert("a" , alphabet));
console.log(convert("b" , alphabet));
console.log(convert("c" , alphabet));