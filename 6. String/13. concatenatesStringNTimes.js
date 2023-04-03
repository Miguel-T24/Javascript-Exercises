'use strict'

// 13. Write a javascript functio to concatenates a goven string nn times 

const concatenatesNTimes = (string , n )=>{
    let result = "";
    for (let i = 0 ; i < n ; i ++){
        result+=string;
    }

    return result;
}

console.log(concatenatesNTimes("Hola", 3));