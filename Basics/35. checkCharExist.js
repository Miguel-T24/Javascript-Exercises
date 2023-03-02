'use strict'

// 35. Write a program to check whether a specified character exist withib the 2nd to 4th position in a given string

function checkChar(str, char){
    for(let i = 1; i < 4; i++){
        if (str[i] === char){
            console.log(`The Value are in ${i + 1} position`);
            break
        }
        else{console.log(`The value isn't exist`);}
    }
}

checkChar("Miguel" , 'g');