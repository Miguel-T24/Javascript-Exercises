'use strict'

// 38. Write a javscript function to crate a case sensitive search.

const caseSensitiveSearch = (str1, str2) =>{
    str1 = str1.split(" ");

    let m = str1.some(item => item.toLowerCase() === str2.toLowerCase());

    return (m)?"Matched":"Not Matched";
}

console.log(caseSensitiveSearch('JavaScript Exercises', 'exercises'));
console.log(caseSensitiveSearch('JavaScript Exercises', 'Exercises'));
console.log(caseSensitiveSearch('JavaScript Exercises', 'Exercisess'));