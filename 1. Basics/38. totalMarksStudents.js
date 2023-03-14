'use strict'

// 38. Write a javascript program to check the total marks of a student in varius examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "final Exam". The student will get A+ grade and total marks must be greater than or equan to 90. Return true if thestudent get A+ grade or false otherwise.

function examn(totmarks, is_examn = false){

    return (is_examn)?totmarks > 90 : totmarks >89 && totmarks <= 100;

    // if(is_examn){
    //     return totmarks >= 90
    // }
    // return(totmarks>=89 && totmarks <=100);
}

console.log(examn(78, false));
 console.log(examn(89, true));
console.log(examn(99, true));