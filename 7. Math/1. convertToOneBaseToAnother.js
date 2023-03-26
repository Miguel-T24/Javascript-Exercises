'use strict'

// 1. Wrte a javascript function to convert a number from one base to another

const baseConvert = (n, initial, change) =>{
    if ((initial && change) <2 || (initial && change)>36)
    return 'Base between 2 and 36';
   
    return parseInt(n + '', initial)
    .toString(change);
}

console.log(baseConvert("E164", 16 ,8));
console.log(baseConvert(1000, 2 ,8));