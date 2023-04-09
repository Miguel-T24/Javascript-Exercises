'use strict'

// 54. Write a javascirpt function to check a given string is in kebab case or not

const kebabCase = (string) =>{
    string = string.split("");
    return (string.includes("-") && !(string.includes(" ")))
}

console.log(kebabCase("j"));
console.log(kebabCase("Java-Exercises"));
console.log(kebabCase("JavaScript-Exercises"));
console.log(kebabCase("javaScript_exercises"));