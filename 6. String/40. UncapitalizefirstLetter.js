'use strict'

// 40. Write a javascirpt function to uncapitalize the fisrt letter of each word of a string

const uncapitalize = (string) =>{
    string = string.split(" ");
    for(let i in string){
        string[i] = string[i].split("");
        string[i][0] = string[i][0].toLowerCase();
        string[i] = string[i].join("");
    }


    return string.join(" ");
}

console.log(uncapitalize("Js string exercises"));