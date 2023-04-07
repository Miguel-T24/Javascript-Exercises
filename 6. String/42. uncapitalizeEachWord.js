'use strict'

// 42. Write a javascirpt function to uncapitalize each word

const uncapitalize = (string) =>{
    string = string.split(" ");
    for(let i in string){
        string[i] = string[i].split("");
        string[i][0] = string[i][0].toLowerCase();
        string[i] = string[i].join("");
    }

    return string.join(" ");
}

console.log(uncapitalize("Hola Mundo"));