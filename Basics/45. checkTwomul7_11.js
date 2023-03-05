'use strict'

// 45.  write a javascript program to check two given integer values and return true if one of the numbers is 15 or their sum or difference is 15

function check(n1,n2){
    (n1 === 15 || n2 === 15 || n1 + n2 === 15 || n1 - n2 === 15 )
    ?console.log(true)
    :console.log(false);
}

check(15, 9);
check(25, 15);
check(7, 8);
check(25, 10);
check(5, 9);
check(7, 9);
check(9, 25);