'use strict'

// 9. Write a javascript programwhich accept a string as input and swap the case of each character. For rexmaple if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const swapCase = (string) => {
    let swap = Array.from(string);

    swap = swap.map((item) => (item === item.toLowerCase())? item.toUpperCase() : item.toLowerCase())

    return swap.join("");
}

console.log(swapCase('The Quick Brown Fox'));