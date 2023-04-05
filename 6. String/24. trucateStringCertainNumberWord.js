'use strict'

// 24. Write a javascirpt function to truncate a string to a certain number of words

const truncate = (string,words) =>{
    string = string.split(" ");
    return string.slice(0,words).join(" ");
}

console.log(truncate("The quick brown fox jumps obvevr the lazy dog", 4));