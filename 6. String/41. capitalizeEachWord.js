'use strict'

// 41. Write a javascirpt function to capitalize each word in the string

const capitalize  = (string) =>{
    string = string.split(" ");
    for(let i in string){
        string[i] = string[i].split("");
        string[i][0] = string[i][0].toUpperCase();
        string[i] = string[i].join("");
    }

    return string.join(" ");
}

console.log(capitalize("hola mundo"));