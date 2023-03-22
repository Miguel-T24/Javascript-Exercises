'use strict'

// 133. Write a javascript program to check whether a given fraction is proper or not

const proper = (num) =>{
    return Math.abs(num[0] / num[1] < 1)?"Proper Fraction":"Improper Fraction"
}

console.log(proper([12,300]))
console.log(proper([103,3]))