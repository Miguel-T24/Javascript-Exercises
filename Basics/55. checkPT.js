'use strict'

// 55. Write a javasciprt program to checj whether a aggiven string contains qual number of p's and t's

const check = (str) =>{
    let countp = 0
    let countt = 0
    for(let i = 0 ; i < str.length ; i++){
        if(str[i].toLowerCase() === 'p'){
            countp += 1
        }else if(str[i].toLowerCase() === "t"){
            countt += 1
        }
    }
    return console.log(`Number of p ${countp}\nNumber of t ${countt}`);
}


check("Tamayo Panama");