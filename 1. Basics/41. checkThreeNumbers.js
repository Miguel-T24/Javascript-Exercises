'use strict'

// 41. Write a javascript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers same return 40

function checkThreeNumbers(n1,n2,n3){
    ((n1 === n2) || (n1 === n3))
        ?(n2 === n3)?console.log(`The Three Numbers entered is the same`)
        :console.log(40)
    :console.log(20)    
}

checkThreeNumbers(2,2,2);
checkThreeNumbers(2,2,1);
checkThreeNumbers(5,2,1);