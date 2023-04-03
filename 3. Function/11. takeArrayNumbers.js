'use strict'

// 11. Write a javakscirpt function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

const secondLowestGreatest = (numbers) =>{
    numbers = numbers.sort((x,y) => (x>y)?1:-1)

    return [numbers[1] , numbers[numbers.length - 2]];
}


console.log(secondLowestGreatest([1,2,3,4,5]));