'use strict'

// 136 write a javascript rpogram to replace the first digit in a string (should contains at least digit) with $ character

const replacefirstdigit = (string)=>{
    return string.replace(/[0-9]/,"$");
}

console.log(replacefirstdigit("abc1dabc"));
console.log(replacefirstdigit("p3ython"));