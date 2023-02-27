'use strict'

// 23. Write a javacript program to crate a new string from given string changing the position of fisrt and last characters. The string length mustb be greater the o equal to 1

let str = prompt("Enter String: ")

if (str.length <= 1){
    console.log(str);
}else{
    // way 1
    // str = str.substring(str.length - 1 , ) + str.substring(1,str.length - 1)  + str.substring(0,1);

    // console.log(str);

    // way 2
    str = str.charAt(str.length - 1) + str.substring(1,str.length - 1)  + str.charAt(0);
    
    console.log(str);
}
