'use strict'

// 5. Write a javasciprt function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

const title = (string) =>{
    string = string.split(" ");
    for (let i in string){
        string[i] = Array.from(string[i])
        string[i][0] = string[i][0].toUpperCase();
        string[i] = string[i].join("");
    }

    return string.join(" ");
}

console.log(title("the quick brown fox"));