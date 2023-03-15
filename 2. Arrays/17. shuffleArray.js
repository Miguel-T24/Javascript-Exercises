'use strict'

// 17. Write a javascirpt program to shuffle an array

let array = [1,2,3,4,5,6,7,8,9,10];
const shuffle = array.sort((a,b) => 0.5 - Math.random())

console.log(shuffle);