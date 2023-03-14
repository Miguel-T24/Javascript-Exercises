'use strict'

// 37 write a javascirpt program to crate new string with first 3 characters are jn lower case from a given string. if the string length is less than 3 convert all the characters in uppercase

function newString(str){
    (str.length < 3)
    ?console.log(`${str.toUpperCase()}`)
    :console.log(`${str.substring(0,3).toLowerCase()}`);
}

newString("Miguel");
newString("Mi");
