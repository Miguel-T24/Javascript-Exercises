'use strict'

// 21. Write a javascript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string

let str = prompt("Enter String: ") 
if(str.substring(0,2).toLocaleLowerCase() === "py"){
    console.log(str);
}else{
    console.log("Py"+str);
}