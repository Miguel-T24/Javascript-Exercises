'use strict'

// 4. Write a javascript program to display the reading status.


var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];


for (let i in library){
    if(library[i].readingStatus === true){
        console.log(`The book ${library[i].title} by autor: ${library[i].author} it's already read`);
    }else{
        console.log(`The book ${library[i].title} by autor: ${library[i].author} it's still need read`);
    }
}
