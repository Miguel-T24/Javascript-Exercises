'use strict'

// 72. Qrite a javascirpt proram to check whether the first and last elements are equal of given array of integer length 3

const check  = (array) =>{
    return (array.length >= 3)
        ?(array[0] === array.slice(-1)[0])
            ?true:false
        :"The array isn't greater than 3"
}


console.log(check([10,20,30]));
console.log(check([10,20,30,10]));
console.log(check([20,20,20]));
console.log(check([20,20]));