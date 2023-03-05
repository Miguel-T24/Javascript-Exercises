'use strict'

// 49 Write a javascript program to replace every character in given string with the character following it in the alphabet

// Ascii code of uppercase from 65 to 90, and lowercase from 97 to 122

// convert to character to number chartCodeAt(char)
// convert to number to character fromCharcode(number)

function convert(str){
    let arr = []

    for(let i = 0 ; i <str.length ; i++){
        arr.push(str.charCodeAt(i));
        (arr[i] === 90)
        ?arr[i] = 65
        :(arr[i] === 122)
            ?arr[i] = 97
        :arr[i] = arr[i] + 1    
        arr[i] = String.fromCharCode(arr[i]);
    }
    return arr.join("");
}

console.log(convert('PythonZz'));