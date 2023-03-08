'use strict'

// 53. Write a javascript program to check whether the character a and  are separated by exactly 3 places anywhere (at least once) in given string

function check(str){
    let count = 0
    let active = 0
    for (let i = 0; i < str.length ; i++){
        if(active === 1 && str[i] != "b") count+=1
        else if(active === 1 && str[i] === "b" && count === 3){
            return console.log(`${str} is separeted by 3 places`)
        } 

        if (str[i] === "a") active = 1
    }
    return console.log(`Isn't not separated by 3 places`);
}

check("anmjb");
check("anmb");