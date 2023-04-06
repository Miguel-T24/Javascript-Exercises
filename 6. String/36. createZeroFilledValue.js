'use strict'

// 36. Write a javasciprt function to crate a Zerofilled value with opctional + , - sign

const zeroFill = (number,size,fill="")=>{
    number = number.toString().split("");

    while(number.length!=size){
        number.unshift("0");
    }

    return fill+number.join("");
}

console.log(zeroFill(120,5,'-'));
console.log(zeroFill(15,7,'+'));
console.log(zeroFill(29,4));