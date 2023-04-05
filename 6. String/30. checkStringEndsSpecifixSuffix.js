'use strict'

// 30. Write a javascript function check if a string ends with specified suffix

const end = (string , suf)=>{
    string= string.split(" ");
    return (string.at(-1) === suf);
}


console.log(end('JS PHP PYTHON','PYTHON'));
