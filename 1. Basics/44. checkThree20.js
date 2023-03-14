'use strict'

function check20(n1,n2,n3){
    ((n1 >= 20) || (n2 >= 20) || (n3 >= 20))
    ?(n1 < n2 || n1 < n3)
        ?console.log(true)
        :console.log(false)
    : console.log(false);
}

check20(23,45,10);
check20(23,23,10);
check20(21,66,75);