'use strict'

// 149. Write a javascript program to change the capitalization of all letters in a given string

const changeCapitalization = (string) => {
    string = Array.from(string);
    for (let i in string){
        string[i] = (string[i] === string[i].toUpperCase())?string[i].toLowerCase(): string[i].toUpperCase();
    }

    return string.join("");
}

console.log(changeCapitalization("HolaMundo"));