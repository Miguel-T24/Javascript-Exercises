'use strict'

const checkAllNumbers = (num) =>{
    num = Array.from(num.toString());
    return num.every(el => el === num[0])
}

console.log(checkAllNumbers(1245678));
console.log(checkAllNumbers(44444));