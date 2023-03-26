'use strict'

// 3. Write a javascript functin to convert a decimal number to binary, hexadecimal or octal number

const obj_convert = {
    "B": (num)=>parseInt(num+"",10).toString(2),
    "H": (num)=>parseInt(num+"",10).toString(16),
    "O": (num)=>parseInt(num+"",10).toString(8)
}

console.log(obj_convert["B"](120));
console.log(obj_convert["H"](120));
console.log(obj_convert["O"](120));