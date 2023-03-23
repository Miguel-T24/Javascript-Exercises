'use strict'

// 4. Write a javascript function that return a passed string with letters in alphabetical.

const alphabeticalOrder = (string) =>{
    return string = Array.from(string).sort().join("");
}

console.log(alphabeticalOrder("webmaster"));