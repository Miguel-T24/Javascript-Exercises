'use strict'

// 51. Write a javascript program to capitalize fisrt letter of each word of given string

function capitalize(str){
    str = str.charAt(0).toUpperCase() +  str.substring(1,);
    let active = 0
    for (let i = 0 ; i < str.length ; i++){
        if(active === 1){
            str = str.substring(0 , i) + str.charAt(i).toUpperCase() + str.substring(i+1,)
            active = 0
        }
        if(str[i] === " ") active = 1;
    }

    return str;
}

console.log(capitalize("hola mundo"));