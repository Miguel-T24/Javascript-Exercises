'use strict'

// 50. write a javascirpt program to checj if given stirng contains alphanumeric charcaters that are palidndromes regadless of special character and letter case.

const palindrome = (string)=>{
    return (string === string.split("").reverse().join(""));
}


console.log(palindrome('$22_|1372^2731|_22$'));
console.log(palindrome('12%^&2'));