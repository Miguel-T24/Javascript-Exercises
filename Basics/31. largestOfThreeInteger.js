'use strict'

// 31.   Write a javascript program to find the largest of three given integers

function largest(n1,n2,n3){
    if (n1>n2){
        if(n1>n3){
            return n1;
        }else{
            return n3;
        }
    }else{
        if(n2> n3){
            return n2;
        }else{
            return n3;
        }
    }
}

console.log(largest(1,2,3));
console.log(largest(3,2,1));
console.log(largest(2,3,1));

// Other simple way
console.log(Math.max(1,2,3));

