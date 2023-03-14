'use strict'

// 58.. qrite a javascript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the string musb be 3 and above.

let str = "Murcielago";

if(str.length < 3){
    console.log(`Sorry but the string must be 3 and above`);
}else{
    console.log(`${str.substring(str.length-3,).repeat(3)}`);
}