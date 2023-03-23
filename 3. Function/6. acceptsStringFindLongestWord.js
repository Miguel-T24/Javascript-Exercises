'use strict'

// 6. Write a javascript function that accepts a string as a parameter and find the longest within th string.

const longest = (string) => {
    string = string.split(" ");
    let max = 0;
    let maxString;
    for(let i in string){
        maxString = (max > string[i].length)?maxString:string[i];
        max = (max > string[i].length)?max:string[i].length;
    }

    return maxString;
}

console.log(`the longest word is: ${longest("Web Development Tutorial")}`);