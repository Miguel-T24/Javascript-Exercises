'use strict'

// 5. Write a javascirpt function toc onvert a string in abbreviated form

const abr = (str)=>{
    return (str!="")?(str.split(" ")[0]) + " " + (str.split(" ")[1][0]):"String is empty";
}

console.log(abr("Rachel Tamayo"));