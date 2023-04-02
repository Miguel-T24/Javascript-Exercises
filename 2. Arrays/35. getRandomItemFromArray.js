'use strict'

const getRandomItem = (array) =>{
    return array[Math.floor(Math.random() * array.length)];
}

console.log(getRandomItem([1,2,9,4,8]));