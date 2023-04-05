'use strict'

// 23. Write a javascript function to strip leading and trailing spaces form a string

function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource  '));