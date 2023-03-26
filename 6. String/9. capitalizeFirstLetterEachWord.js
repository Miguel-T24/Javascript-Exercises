'use strict'

// 9. Write a javascript function to capitalize the first letter of each word in a string

const capitalizeEachLetter = (str) =>{
    str = str.split(" ")
    for (let i in str){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    }
    return str.join(" ");
}

console.log(capitalizeEachLetter("hola mundo desde javascript"));