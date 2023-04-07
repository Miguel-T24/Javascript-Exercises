'use strict'

// 46. write a javascript function to test whether a string starts with a specified string

const textStart = (string, start)=>{
    return (string.slice(0,start.length) === start);
}

console.log(textStart("js String", "js"));
console.log(textStart("js String", "jx"));