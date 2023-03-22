'use strict'

// 135. Write a javascript program to remove all characters from a given string that appear more than once

const remove = (string) =>{
    let result = [];
    let active = 0;
    string = Array.from(string)
    for(let i = 0 ; i < string.length - 1 ; i++){
        for (let j = i + 1 ; j < string.length ; j++){
            if(string[i] === string[j]){
                string[j] = 0;
                active = 1;
            }
            string[i] = (active === 1)? 0 : string[i];
            active = 0;
        }
    }

    result = string.filter(el => el != 0);
    return result.join("");
}

console.log(remove('abcdabc'));
console.log(remove('python'));
console.log(remove('abcabc'));
console.log(remove('1365451'));