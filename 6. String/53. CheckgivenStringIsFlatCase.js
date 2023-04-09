'use strict'

// 53. Write a javascript function to check a given string is in flat case or nor

const flatCase = (string) =>{
    for (let i in string){
        if(string[i] === " " || string[i] === string[i].toUpperCase()){
            return false;
        }
    }

    return true
}


console.log(flatCase("j"));
console.log(flatCase("java exercises"));
console.log(flatCase("JavaScriptExercises"));
console.log(flatCase("javascriptexercises"));