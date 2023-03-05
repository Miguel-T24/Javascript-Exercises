'use strict'

// 50. Write a javascript program to capitaliza the firt letter of each word of given string

function convert(str){
    str = str.charAt(0).toUpperCase() + str.substring(1,)
    let active = 0
    for(let i = 0 ;i < str.length ; i++){
        if (active === 1){ 
            str = str.substring(0,i) + str[i].toUpperCase() + str.substring(i+1,)
            active = 0 
        }
        if (str[i] === ' ') active = 1;
    }

    return str
}

console.log(convert("miguel gabriel y jaimenrri son grupos"));