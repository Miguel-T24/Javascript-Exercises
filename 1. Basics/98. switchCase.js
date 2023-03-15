'use strict'

// 98. Write a javascript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case
// For example "Write" will be write and "PHp" will be "PHP"

const switchCase = (str) =>{
    let countU = 0;
    let countL = 0;
    for(let i in str){
        (str[i]===str[i].toUpperCase())?countU +=1:countL+=1;
    }
    str = Array.from(str);
    return ((countU > countL) ? str.map(x => x.toUpperCase()) : str.map(x => x.toLowerCase())).join('') ;
}

console.log(switchCase("Write"));
console.log(switchCase("PHp"));