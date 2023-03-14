'use strict'

// 26. Write a javascript program to crate a new string from a given string taking the last 3 characers and added at both the front and back. The string lenght must be 3 or more

let str = prompt("Enter String: ");

if(str.length < 3){
    console.log(str);
}else{
    str = str.substring(str.length - 3 ,) + str + str.substring(str.length - 3 ,);

    console.log(str);

}