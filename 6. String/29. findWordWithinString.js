'use strict'

// 29. Write a javascript funnction to find a word within a string


const countWords= (string,word) =>{
    let counter = 0;
    string = string.split(" ");
    for(let i in string){
        if(string[i] === word){
            counter += 1;
        }
    }
    return counter;
}


console.log(countWords('The quick brown fox', 'fox'));
console.log(countWords('aa bb cc dd aa', 'aa'));