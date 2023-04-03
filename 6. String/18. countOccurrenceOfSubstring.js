'use strict'

// 18. Write a javascirpt function to count the occurence of a substring in a string.

const ocSubString = (string, sub) =>{
    let oc = 0;

    for (let i in string){
        if ((i!=0 || i!=1 || i!=2) && string.slice(i-3,i).toLowerCase() === sub.toLowerCase()){
            oc+=1;
        }
    }

    return oc;
}

console.log(ocSubString("The quick brown fox jumps over the lazy dog", 'the'));