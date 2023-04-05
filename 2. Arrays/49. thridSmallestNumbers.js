'use strict'

// 49. Write a javascript program that takes an array of numbers and reutrn the thrid smallest number.


const thirdSmallest = (array) =>{
    array = array.sort((x,y) => (x<y)?-1:1)

    return array[2];
}

console.log(thirdSmallest([2,3,5,7,1]));
console.log(thirdSmallest([2,3,0,5,7,8,-2,-4]));