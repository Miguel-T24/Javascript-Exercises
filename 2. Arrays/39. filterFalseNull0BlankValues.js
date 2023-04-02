'use strict'

// 39. Write a javascript function to filter false, null, 0 and blank from an array

const filter_array_values = (array) =>{
    return array.filter(el => (typeof el!="boolean" && el!=null && el!=0 && el!=""))
}   

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));