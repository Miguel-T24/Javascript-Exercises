'use strict'

// 59. write a javascript program to extract the fisrt half of the string of even length

const extract = (str) => {
    if(str.length % 2 === 0){
        return str.slice(0, str.length / 2)
    }
    return str;
}

console.log(extract("JavaScript"));
console.log(extract("Python"));
console.log(extract("php"));