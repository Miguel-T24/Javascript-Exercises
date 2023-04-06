'use strict'

// 27. Write a javascript function to test case insensitive string comparasion

const caseInsensitive = (str1,str2) =>{
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(caseInsensitive('abcd', 'AbcD'));
console.log(caseInsensitive('ABCD', 'Abce'));