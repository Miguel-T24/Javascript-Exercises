'use strict'

// 26. Write a javascript function to rmeove the first occurrence of a given 'search string' from a string

const removeFirstOccurrence = (string) =>{
    string = string.split(" ");
    for (let i in string){
        if(string[i] === " "){
            string.splice(i,1);
        }
    }

    for(let i = 0 ; i < string.length - 1 ; i++){
        for(let j = i+1;j<string.length;j++){
            if(string[i].toLowerCase() === string[j].toLowerCase()){
                string.splice(j,1);
                return string.join(" ");
            }
        }
    }

    return string.join(" ");
}

console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'the'));