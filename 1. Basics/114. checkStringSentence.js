'use strict'

// 114. Write a javascript program to check whether a given string represents a correct sentence or not. A string is considered corrent sentence if it starts with the capital letter and ends with a full seopt(.).

let correctSentence = (string) => {
    return (string.at(0) === string.at(0).toUpperCase() && string.at(-1) === "." )?"correct Sentence" : "INCORRECT SENTENCE"
}

console.log(correctSentence("Hello World."));
console.log(correctSentence("hello World"));
console.log(correctSentence("hello World."));
console.log(correctSentence("Hello World"));