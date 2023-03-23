'use strict'

// 2. Write a javacript program that checks whether a passes string is palindrom or nor

const palindrom = (string) =>{
    return (string === string.split("").reverse().join(""))?"Its Palindrom":"Isn't Palindrom";
}

console.log(palindrom("aba"));
console.log(palindrom("abc"));