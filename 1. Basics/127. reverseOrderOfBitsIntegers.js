'use strict'

// 127. Write a javascript program to reverse the order of the bits in a given integer

const reverseBits = (integer) =>{
        integer = integer.toString(2);
        integer = Array.from(integer);
        while (true){
            if (integer.length !=8){
                integer.unshift(0);
            }else{
                break;
            }
        }
        integer = integer.reverse();
        integer = integer.join("");
        return integer
}

let integer = 14;
let func = reverseBits(14);
console.log(`${integer} -> ${integer.toString(2)} -> ${func} -> ${parseInt(func,2)}`);

integer = 56;
func = reverseBits(56);
console.log(`${integer} -> ${integer.toString(2)} -> ${func} -> ${parseInt(func,2)}`);

integer = 234;
func = reverseBits(234);
console.log(`${integer} -> ${integer.toString(2)} -> ${func} -> ${parseInt(func,2)}`);