'use strict'

const sumDigit = (string) =>{
    let numbers = [];
    for (let i in string){
        if(/\d/.test(string[i])){
            numbers.push(parseInt(string[i]));
        }
    }

    return numbers.reduce((a,b) => a+b);
}

console.log(sumDigit("abcd12efg9"));
console.log(sumDigit("w3resource"));