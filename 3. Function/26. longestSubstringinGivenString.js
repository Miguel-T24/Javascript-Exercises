'use strict'

// 26. Write a javascript function to find longest substring in a given a string without repeating characters

const subtringWithoutRepeat = (string)=>{
    let count = 0;
    for(let i in string){
        count = 0;
        for (let j in string){
            if(string[i] === string[j]){
                count+=1
                if(count >1){break};
            }
        }
        if(count === 1){
            return string.slice(i - 1,);
        }
    }
}


console.log(subtringWithoutRepeat("google.com"));
console.log(subtringWithoutRepeat("example.com"));