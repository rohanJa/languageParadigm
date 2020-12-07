

console.log(getName);
var x=10;
function getName()  {
    console.log("Namaste JavaScript");
}

console.log(getName);

var getName2 = function () {
    console.log("getName2 function is invoked.");
}

console.log(getName2);

/*
    getName2() is 1st in memory allocation get allocated "undefined" so if we call the function before its intialization 
    it will through an error that getName2() is not defined. But in getName() function first the function "getName()" get
    allocated with whole function . So, if we access it before its intialization it will get invoked as in the memory allocation
    state it will be allocated so it does not matter if we call before or after its intialization.
*/

