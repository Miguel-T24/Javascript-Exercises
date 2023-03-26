'use strict'

const lowerUpperUpperLower = (str) => {
    str = str.split("");
    for (let i in str){
        str[i] = (str[i] === str[i].toUpperCase())?str[i].toLowerCase():str[i].toUpperCase();
    }
    return str.join("");
}

console.log(lowerUpperUpperLower("AaBbc"));