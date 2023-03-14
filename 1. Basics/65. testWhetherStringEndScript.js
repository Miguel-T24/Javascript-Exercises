const checkScript = (str) =>{
    return (str.length < 6)
    ? "we can do it this operation"
    : (str.slice(-6).toLowerCase() === "script")
        ? true:false
}

console.log(checkScript("Javascript"));
console.log(checkScript("JavaScript"));
console.log(checkScript("Java Script"));
console.log(checkScript("JavaScripts"));