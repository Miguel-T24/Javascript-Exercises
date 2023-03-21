'use strict'

// 125. Write a javascript program to find the longest string from a given array

const longest = (array) =>{
    let max = 0;
    let lon = "";
    for(let i in array){
        lon = (array[i].length > max)?array[i]:lon;
        max = (array[i].length > max)?array[i].length:max;
    }
    return [lon , max];
}

let [lon , max] = longest(["Hola", "Mundo" , "Backend"]);
console.log(`String: ${lon} length: ${max}`);