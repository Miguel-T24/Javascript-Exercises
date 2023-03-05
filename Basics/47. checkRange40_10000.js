'use strict'

// 47 write a javascirpt programt o check whether a given number is presents in the range 40...10000

function check(range1,range2,n){
    (n >= 40 && n <= 10000)
    ?console.log(`Number in range 40 and 10000`)
    :(n>=range1 && n<=range2)
        ?console.log(`Number in range ${range1} and ${range2}`)
        :console.log(false);
}

check(40,4000, 45);
check(80,320, 79);
check(89,4000, 30);