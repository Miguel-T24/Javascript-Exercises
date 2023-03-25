'use strict'

// 6. Write a javascript program which compute, the average marks of the following students Then , this average is used to determine the corresponding grade


const average = (student , marks) =>{
    let letter;
    if(marks < 61){
        letter  = "F";
    }else if(marks < 71){
        letter = "D";
    }else if(marks < 81){
        letter = "C";
    }else if(marks < 91){
        letter = 'B';
    }else if(marks <= 100){
        letter = 'A';    
    }

    return `The student ${student} have a grade ${letter}`;
}

console.log(average("David" , 80));
console.log(average("Vinoth" , 77));
console.log(average("Dinya" , 88));
console.log(average("Ishitha" , 95));
console.log(average("Thomas" , 68));