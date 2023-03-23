'use strict'

// 3. Write a javascript function that generates all combinations of a string

const combinations = (string) =>{
    let result = [];
    for (let i = 0 ;i < string.length; i++){
        for (let j = i + 1; j < string.length + 1; j++){
                result.push(string.slice(i,j));
        }
    }
    return result.join(", ");
}   

console.log(combinations("dog"));