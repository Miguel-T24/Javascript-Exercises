'use strict'

// 46 write a javascirpt program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11

function check(n1,n2){
    ((n1 % 7 === 0  || n1 % 11 === 0) || (n2 % 7 === 0  || n2 % 11 === 0))
    ?console.log(true)
    :console.log(false);
}

check(14,21);
check(14,20);
check(16,20);