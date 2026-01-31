// JavaScript variable
// A JavaScript variable is simply a name of storage location 

// there are two types of variable in javascript

// 1. local variable
// 2. global variable

// rules
// -- name must start with a letter (a to z or A toZ), underscore(_), or dollar($) sign
// -- After first letter can use digit(0 to 9) for example value1
// -- javascript variable are case sensitive for example x andX are different variables
// varibale should not start with digits
// example
// var a1=10 //valid
// var 1a=10 //invalid
// -- no space between variable name
// example
// var a b=10; //invalid
// var sb=10;


// local variable
// local variable are variables that are declared inside of a function or loop.


function test() {
  if (true) {
    var a = 10;
    console.log(a)
    // a = 20
    // console.log(20)
  }
}

test();

//  global variable are variables that are declared outside of a function or loop.

var a = 10
function test() {
  if (true) {
    console.log(a)
    a = 20;
    console.log(a)
  }
}
console.log(a)
test()