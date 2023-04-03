'use strict'

// 16. Write a javascript function to extract unique characters form a string

const uniqueChar = (string) =>{
        return Array.from((new Set(string))).join("");
} 

console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));