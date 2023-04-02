'use strict'

// 2. Write a javascirpt funciton to find an array contains a specific element

const specific = (array,element) => {
    return array.some(el => el === element)
}

console.log(specific([2,5,3,9,6] , 5));
console.log(specific([2,3,9,6] , 5));