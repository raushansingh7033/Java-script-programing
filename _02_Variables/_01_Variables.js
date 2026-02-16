//console in javaScript
//console.log  is used to print / log a message / output to the console.
// console.log("Hello Manas!")

// comments in javScript
// part of code which are not going to execute and just for reference or good readability of code.
// type of comment

// 1. single line comment

/*
   2. multiline comment
*/

// alt shift keydown


// variables :
// a variable is like a container that holds data. it is used to store data that can be used and manipulated throughout your program

// RAM and ROM

// think of a variable as a named container that holds a value
// in javascript a variable can contain any type of data

// three stages of a variable 
// 1. declaration let name;
// 2. initialization name="raushan"
// 3. use  console.log(name)

let name;
name = "Raushan"
console.log(name)
let alpha = "afhsl"
console.log(alpha)

let a = 10, b = 30, c = 40;
console.log(a, b, c)


// var : variables can be re-declared & reassign global scope variable
// let : variable can not be re-declared but can  be reassign block scope variable
// const : variable can not redeclared or reassign block scope variable


// variables are case sensitive
// only letters , digits, underscore(_) and $ is allowed(not even space)
// only a letter , underscore , or $ should be 1st character
// reserved keywords can not be variable names


// camelcase -> nameFromDatabaseUser
// snake case -> name_from_database_user
// pascal case -> NameFromDatabaseUser
// kebab case  -> name-from-data-user

// data type

// Primitive data : NNSSBBU Number Null String symbol boolean bigint Undefined 


// javaScript is a Dynamically typed language & Forgiving Language
// you don't need to specify the type of a variable even variable dynamically change its type respective to other data assigned it

//prompt("Enter full name");

let num = 1;
console.log(typeof a)


// Q1: How do you declare a variable in JavaScript?
// ans : using let const var
// Q2: What is the difference between var, let, and const?

// var : variables can be re-declared & reassign global scope variable
// let : variable can not be re-declared but can  be reassign block scope variable
// const : variable can not redeclared or reassign block scope variable

// Q3: Can you change the value of a const variable?
// no

// Q4: What will happen if you use a variable without declaring it?
//  reference error
// Q5: What is the default value of an uninitialized variable in JavaScript?
// undefined
// Q6: What are the primitive data types in JavaScript?
// nnssbbu number null string symbol boolean bigint undefined
// Q7: What is the difference between null and undefined?
// undefined variable declare kiya ho par intialize nahi kiya ho (data type undefined)
// agar maine variable me null assign kar diya to wo null dega (datatype object)
// Q8: Is JavaScript a statically typed or dynamically typed language?
// dynamically
// Q9: What will be the output of typeof null?
// object
// Q10: What happens when you add a number and a string in JavaScript?
// string
// Q11: What is type coercion? Give an example.
//   jab two different data type ke  value par  hum operation perform kar rahe tb javascript ek value ko dynamically change karke operation perform karta hai
// Q12: How can you manually convert a string to a number in JavaScript?

// Q13: What is the result of "5" - 3 in JavaScript?
// 2
// Q14: What is NaN in JavaScript, and how do you check if a value is NaN?
// not a number
console.log(0 / 0)
let number = parseInt("MKL")
console.log(number)
// Q15: How do you check the type of a variable in JavaScript?
//typeof
