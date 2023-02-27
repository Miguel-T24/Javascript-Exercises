'use strict'

// 3. Write a javascript program to check whether a string "Script" otherwise return the original one

let str = "javaScriptsome";

if(str.substring(4, 10) === "Script"){
    console.log(str.substring(0,4) + str.substring(10,) );
}else{
    console.log(str);
}