'use strict'

// 40 write a javascript program to check from twi given integers whether one of them is 8 or their sumor difference is 8

function check8(n1,n2){
    return ((n1 || n2) == 8 || (n1+n2) === 8 || (n1-n2) == 8)?true:false;
}

console.log(check8(8,50));
console.log(check8(5,3));
console.log(check8(10,2));
console.log(check8(45,2));