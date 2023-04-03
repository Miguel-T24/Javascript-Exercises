'use strict'

// 22. Write a javascript fucntion that acceptas two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string


const occurrence = (string,letter)=>{
    let count = 0;
    for(let i in string){
        if(string[i] === letter){count+=1}
    }

    return count
}

console.log(occurrence('w3resource.com', 'o'));