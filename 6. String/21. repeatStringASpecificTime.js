'use strict'

// 21. Write a javascript function to repeat a string a specified times

const repeat = (string,rep) =>{
    let result = string;

    for(let i = 0 ; i < rep - 1 ; i++){
        result += string;
    }

    return result;
}

console.log(repeat("Hola",2));