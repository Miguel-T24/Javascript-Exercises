'use strict'

// 43. write a javascript program to check three given numbers that two or all of them have the same rightmost digit

function checkDigitrightmost(n1,n2,n3){
    (n1.toString().slice(-1) === n2.toString().slice(-1) && n2.toString().slice(-1) === n3.toString().slice(-1))
    ?console.log(`The last digit is the same`)
    :console.log(`X The last digit isn't same X`);
}

checkDigitrightmost(50,40,60);
checkDigitrightmost(51,56,31);