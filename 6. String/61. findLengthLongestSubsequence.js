'use strict'

// 61. Write a javascript function to find the length of longest subsequence present in given two sequences


const sequence =(str1,str2)=>{
    let min = 0;
    let strMin;
    let strMax;
    let  array = [];

    if(str1.length<=str2.length){
        strMin = str1;
        strMax = str2;
        min = str1.length;
    }else{
        strMin = str2;
        strMax = str1;
        min = str2.length;
    }

    for (let i = 0 ; i < min ; i++){
        if(strMin[i] === strMax[i]){
            array.push(strMin[i])
        }else{
            return array.length;
        }
    }

    return array.length;
}

console.log(sequence("abcda", "abcdef"));
console.log(sequence("ABCD", "ACBAD"));
console.log(sequence("pqr", "pqr"));
console.log(sequence("pqr", "abc"));