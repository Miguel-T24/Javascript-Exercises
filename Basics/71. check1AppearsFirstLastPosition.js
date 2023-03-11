'use strict'

// 71. Write a javascript program to check whether 1 apears in first or last position of a given array integers. The array lenght must be greater or equal to 1.

const check = (array)=>{
    return (array[0] === 1 || array[array.length - 1] === 1)
        ?true:false
}

console.log(check([1,3,5]));
console.log(check([1,3,5,1]));
console.log(check([2,4,6]));