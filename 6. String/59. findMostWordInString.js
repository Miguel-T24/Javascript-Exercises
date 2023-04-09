'use strict'

// 9. Write a javascript program to find most frequent word in a givven string.

const mostFrequentWord = (string) => {
    string = string.split(" ");
    let count = 0;
    let max = 0;
    let word;

    for(let i in string){
        for(let j in string){
            if(string[i] === string[j]){count++}
        }

        if(count > max){
            max = count;
            word = string[i]
        }
        count = 0;
    }

    return word;
}

console.log(mostFrequentWord("The quick brown fox jumps over the lazy dog"));
console.log(mostFrequentWord("Python is a high-level, general-purpose programming language."));
console.log(mostFrequentWord(" It was the same man, she was sure of it. It's always the same, Chauncey."));