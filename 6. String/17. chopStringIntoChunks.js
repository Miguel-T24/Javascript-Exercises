'use strict'

// 17. Write a javascript function to chop a string into chunks of a given length

const chop = (string, cut)=>{
    let chop = [];
    for (let i =0 ; i <string.length ; i +=cut ){
        chop.push(string.slice(i,i+cut))
    }

    return chop;
}

console.log(chop("w3resource"));
console.log(chop("w3resource",2));
console.log(chop("w3resource",3));