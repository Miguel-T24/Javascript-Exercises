
// 29. Write a javascript function to get the function name

function abc() {
    console.log( arguments.callee.name );
}

abc();