'use strict'

// 99. Write a javascript program to check whether it is possible to rearrange characters of a given string in such way thah it will become equal to another given string.

function rearrangement_characters(str1, str2) {

    var first_set = str1.split(''),
        second_set = str2.split(''),
        result = true;
  
    first_set.sort();
    second_set.sort();
  
    for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
      if (first_set[i] !== second_set[i]) {
        result = false;
      }
    }
  
    return result;
  }
  
  console.log(rearrangement_characters("xyz", "zyx"))
  console.log(rearrangement_characters("xyz", "zyp"))