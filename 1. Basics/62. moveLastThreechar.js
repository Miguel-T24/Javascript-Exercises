'use strict'

// 62. Qrite a javascript program to move last three character to the start of given string. The string length must be greaater or equal to three


const movethreechar = (str) =>{
    return (str.length < 4 )
    ?console.log(`No se puede realizar la operacion`)
    : console.log(str.slice(-3) + str.slice(0,-4));
}

movethreechar("Python");
movethreechar("Javascript");
movethreechar("Hi");
