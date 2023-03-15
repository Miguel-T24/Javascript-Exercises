'use strict'

// 13. Write a javascript rpogram to add items in an blank array and display the items

const btnAdd = document.getElementById("add");
const btndisplay = document.getElementById("display");
const father = document.getElementById("container");
let input = document.getElementById("input");

let array = [];

btnAdd.addEventListener('click', () =>{
    array.push(input.value);
})

btndisplay.addEventListener('click', ()=>{
            let nodeBeforeend = document.createElement('p');
            let text = document.createTextNode(`Element ${array.indexOf(array.at(-1))} = ${array.at(-1)}`);
            nodeBeforeend.appendChild(text);
            father.insertAdjacentElement('beforeend',nodeBeforeend);

            input.value = "";
})