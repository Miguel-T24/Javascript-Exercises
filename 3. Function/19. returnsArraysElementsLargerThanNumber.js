'use strict'

// 19. Write a javascript function that return array elements larger than a number

const largerThan = (array,num)=>{
    return array.filter(el=>el>num)
}

console.log(largerThan([11,45,4,31,64,10],10));