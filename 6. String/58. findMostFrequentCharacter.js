'use strict'

// 58. Write a javascirpt program to find the most frequent character in a given string


const mostFrecuenChar = (string) =>{
    string = string.split("");
    let max = 0;
    let char;
    let count = 0;

    for (let i in string){
        for (let j in string){
            if(string[i] === string[j]){count+=1}
        }
        if(count > max){
            max = count;
            char = string[i];
        }
        count = 0;
    }

    return char;
}

console.log(mostFrecuenChar("Madam"));
console.log(mostFrecuenChar("civic"));
console.log(mostFrecuenChar("HellloL223LLL"));