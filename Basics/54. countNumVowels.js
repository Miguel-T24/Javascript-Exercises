'use strict'

// 54. Write a javascript program to count the number of vowels in given string


function count(str){
    let vowels = ['a','e','i','o','u'];
    let count = 0 

    for (let  i = 0 ; i<str.length ; i++){
        for(let j = 0 ; j < vowels.length ; j++ ){
            if(str[i] === vowels[j]) count += 1
        }
    }

    return console.log(`${str} have ${count} vowels`);
}

count("Hola Mundo");