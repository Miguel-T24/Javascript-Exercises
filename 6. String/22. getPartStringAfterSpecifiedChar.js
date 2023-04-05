'use strict'

// 22. Write a javascript function to get a part a string aftes a specicifed char

const part = (string,char,pos)=>{
    if(pos === "a"){
        return string.slice(0,string.indexOf(char));
    }else if(pos === 'b'){
        return string.slice(string.indexOf(char),);
    }else{
        return string
    }
}

console.log(part('w3resource: JavaScript Exercises', ':','a'));
console.log(part('w3resource: JavaScript Exercises', 'E','b'));