'use strict'

// 62. Write a javascript function to get the length ogf the longest valid parentheses

const validParentesis = (parentesis) =>{
    let count = 0;

    for (let i = 0;i<parentesis.length;i++){
        if(i!=0){
            if(parentesis[i] === "]" && parentesis[i-1] === "["){count++};
        }
    }

    return count*2;
}

console.log(validParentesis("[[]"));
console.log(validParentesis("][][]]"));
console.log(validParentesis(""));