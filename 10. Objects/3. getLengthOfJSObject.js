'use strict'

// 3. Write a javascript program to get the length of a javascript object

let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12,
    lastName: "Hello World"
};

console.log(Object.getOwnPropertyNames(student).length);