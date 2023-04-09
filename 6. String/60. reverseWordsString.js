'use strict'

// 60. Write a javascript function to reverse word in given string

const reverseWords = (string) =>{
    string = string.split(" ");

    for(let i in string){
        string[i] = string[i].split("").reverse().join("");
    }

    return string.join(" ");
}

console.log(reverseWords("abc"));
console.log(reverseWords("JavaScript Exercises"));