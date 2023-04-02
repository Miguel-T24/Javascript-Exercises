'use strict'

// 31. Write a javascript function to remove a specific element from an array

const removeSpecific = (array,element) =>{
    return array.filter(el => el!=element);
}

console.log(removeSpecific([2,5,9,6], 5));