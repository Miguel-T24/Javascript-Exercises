'use strict'

// 23, Write a function to find first not repeated character

const firstNoRepeatChar = (string)=>{
    let count = 0;
    for (let i in string){
        count = 0;        
        for (let j in string){
            if(string[i] === string[j]){count+=1;if(count===2){break}}
        }
        if(count === 1){return string[i]}
    }

    return "All character repeat"
}

console.log(firstNoRepeatChar('abacddbec'));