'use strict'

// 7. Write a javascript function that accepts a string as parameter and counts the number of vowels within string.

let vowels = ['a' , 'e' , 'i' ,'o', 'u'];

const countsVowels = (string , vowels) =>{
    let count = 0;

    for(let i in string){
        for(let j in vowels){
            if(string[i] === vowels[j]){count+=1; break}
        }
    }

    return count;
}

console.log(countsVowels("The quick Brown fox" , vowels));