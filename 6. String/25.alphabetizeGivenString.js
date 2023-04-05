'use strict'

// 25. Write a javascript function to alphabetize a given string.

const alphabetizeString = (string) =>{
    string = string.split("");

    for(let i in string){
        if(string[i] === " "){
            string.splice(i,1)
        }
    }

    string = string.sort((x,y) => (x<y)?-1:1)

    return string.join("");

}


console.log(alphabetizeString('United States'));