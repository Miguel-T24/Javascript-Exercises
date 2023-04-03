'use strict'

// 14. Write a javascript function to insert string within a string at a particular positiion

const particularPosition = (string, insertString, pos)=>{
    return string.slice(0,pos) + insertString + string.slice(pos, );
}


console.log(particularPosition("We are doing some exercises", "Javascript", 18));