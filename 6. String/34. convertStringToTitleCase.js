'use strict'

// 33. Write a javascript co convert a string to title case

const titleCase = (string)=>{
    string = string.split("")
    string[0] = string[0].toUpperCase()
    let active = 0;

    for (let i in string){

        if(string[i] === " "){
            active = 1
        }else if(active === 1){
            string[i] = string[i].toUpperCase()
            active=0;
        }
    }

    return string.join("");
}


console.log(titleCase("hola mundo"))
console.log(titleCase("hola a todos"))