'use strict'

// 28. Write a javascirpt program to pass a 'Javascript Function" as parameyter

function print (hello){
    hello();
    console.log("World");
}


function hello(){
    console.log("Hello");
}


print(hello);


const ex2 = () =>{
    console.log("Example");
}

const ex22 = (example2) =>{
    example2();
    console.log("Number 2");
}

ex22(ex2);