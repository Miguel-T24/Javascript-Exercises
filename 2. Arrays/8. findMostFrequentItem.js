'use strict'

// 8. write a javascirpt program to find the most frequent item of an array

const mostFrecuence = (array) =>{
    
    let count = 0;
    let max = 0;
    
    let items = array.filter((i,index) =>{
        return array.indexOf(i) === index;
    })
    
    let most = items[0];

    for(let i = 0 ; i < items.length ; i++){
        for(let j = 0 ; j < array.length ; j++){
            if(items[i] === array[j]){
                count += 1
            }
        }
        if(max < count) {
            max = count;
            most = items[i];
        }
        count = 0;
    }

    return [most , max]

}

let mostArray = mostFrecuence([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])

console.log(`The most frequency items is ${mostArray[0]} apparence ${mostArray[1]} times`);