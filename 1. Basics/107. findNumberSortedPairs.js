'use strict'

// 107 Write a jaavscript program to find the number of sorted pairs fromed by its elements f a given array of integers such that one element in the pair s divisibe by other one

function arr_pairs(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++)
        {
        for (var j = i + 1; j < arr.length; j++)
            {
              if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
                {
                result++;
                }
         }
      }
    return result;
}
console.log(arr_pairs([1,2,3]))
console.log(arr_pairs([2,4,6]))