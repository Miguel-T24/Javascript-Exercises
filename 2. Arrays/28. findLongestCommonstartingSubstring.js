'use strict'

// 28. Write a javascript function to find the longest common starting substring in a set of strings

const longestCommon = (str1,str2) =>{
    let maxString, minString;
    let result = [];
    if(str1 === "" || str2 === ""){
        return "String Vacio";
    }
    if(str1.length>str2.length){
        maxString = str1;
        minString = str2;
    }else{
        maxString = str2;
        minString = str1;
    }

    for(let i in minString){
        if(minString[i] === maxString[i]){
            result.push(minString[i]);
        }
    }

    return result.join("");
}

console.log(longestCommon("go","google"));
console.log(longestCommon("SQLInjection","SQLTutorial"));
console.log(longestCommon("SQLInjection",""));