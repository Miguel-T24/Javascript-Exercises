'use strict'

// 39. write a javascript program to compute the sum of the two given integers, if the sum is in the range 50 - 80 return 65, otherwise return 80

function suma(n1,n2){
    return((n1 + n2)>=50 && (n1+n2) <= 80 ) ? 65:80;
}

console.log(suma(50,20));
console.log(suma(0,20));
