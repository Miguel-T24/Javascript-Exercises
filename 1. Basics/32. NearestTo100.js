'use strict'

// 32. Write javascript program to find a value which is nearest to 100 from two different given integer values.

function nearest100(n1,n2){
    function minus100(n){
        return Math.abs(n-100);
    }
    let nr1 = minus100(n1);
    let nr2 = minus100(n2);
    if (nr1 === nr2){
        console.log(`Both numbers are the same distance`);
    }else if(nr1 < nr2){
       console.log(n1);
    }else{
        console.log(n2);
    }
}

nearest100(-1, -2);
nearest100(50, -50);
nearest100(250, -50);