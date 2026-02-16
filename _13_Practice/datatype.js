// javascript
// identifiers variable data types
// operator arithmetic assignment relational
// logical bitwise 
// control statements if & Else if 
// nested if else 
// switch
// for loop 
// while loop do while loop
// nested loop
// function recursion
// arrow function
// var let const
// string
// array
// objects
// object destructring and set and map
// oops classes
// inheritance and types
// BOM AND DOM
// keyboard event create and remove element 
// time based event and dropdown menu
// objects hoisting strict mode clousers and async 
// json ajax and api fetch api
// rest and spread operator
// ajax and premises

// Data type
// A data type in js is way to describe the typeof data that is stored in a variable

// when we create a variable in js , you do not have worry about type of data you will store in it because javascript is a dynamically typed language

// we don't even have to specify the data type for the variable while decalring it

var x = 5; // x= is anumber
var name = "raushan" // name is string

//   in java script, data tpes are two
// 1. primitive data type
// 2. non - primitive data type
// Array and Object

// primitive data type
// string
// boolean
// number
// undefined
// null
// symbol
// bigint


// 1️ String


// A string is a sequence of characters written inside quotes ("", '', or ````).

//  Example:

// let name = "Raushan";
// let city = 'Gurgaon';
// console.log(name);

// 2️ Boolean


// Boolean represents only two values: true or false.

//  Example:

// let isStudent = true;
// let isAdult = false;
// console.log(isStudent);

// 3️ Number


// Number is used to store numeric values (integers and decimals).

//  Example:

// let age = 22;
// let price = 99.5;
// console.log(age);

// 4️ Undefined

// A variable is undefined when it is declared but not assigned any value.

//  Example:

// let x;
// console.log(x); // undefined

// 5️ Null
// null means an intentional empty value (no value).

// Example:

// let data = null;
// console.log(data); // null

// 6️ Symbol
// Symbol is a unique and immutable value, often used as object keys.

//  Example:

// let id = Symbol("id");
// console.log(id);

// 7️. BigInt


// BigInt is used to store very large integers beyond the Number limit.

//  Example:

// let bigNumber = 123456789012345678901234567890n;
// console.log(bigNumber);


// Tokens:
// Smallest entity of any program like identifiers constants keywords operators punctuators space 

// methods:
// Number()
// it is used to convert a value into number

// 1️ Number()

//  Convert a value to a number.

// let a = "10";
// let b = Number(a);
// console.log(b);      // 10
// console.log(typeof b); // number

// 2️ String()

//  Convert a value to a string.

// let a = 10;
// let b = String(a);
// console.log(b);        // "10"
// console.log(typeof b); // string

// 3️ Boolean()

//  Convert a value to boolean.

// console.log(Boolean(1));   // true
// console.log(Boolean(0));   // false
// console.log(Boolean(""));  // false
// console.log(Boolean("Hi")); // true

// 4️ parseInt()

//  Convert string to integer.

// let a = "10.5";
// console.log(parseInt(a)); // 10

// 5️ parseFloat()

//  Convert string to decimal number.

// let a = "10.5";
// console.log(parseFloat(a)); // 10.5

// 6️ BigInt()

//  Convert value to BigInt.

// let a = 10;
// let b = BigInt(a);
// console.log(b); // 10n

// 7️ Symbol()

//  Create a unique symbol.

// let id = Symbol("id");
// console.log(id);




//  Math.floor()

//  Definition:
// Math.floor() returns the largest integer less than or equal to a given number (rounds down).

//  Example:

// let num = 4.9;
// console.log(Math.floor(num)); // 4

// 1️ Math.ceil()

//  Rounds a number UP to the nearest integer.

// console.log(Math.ceil(4.1)); // 5

// 2️ Math.round()

//  Rounds to the nearest integer.

// console.log(Math.round(4.5)); // 5
// console.log(Math.round(4.4)); // 4

// 3️ Math.trunc()

//  Removes decimal part (no rounding).

// console.log(Math.trunc(4.9)); // 4

// 4️ Math.abs()

//  Returns absolute (positive) value.

// console.log(Math.abs(-10)); // 10

// 5️ Math.max()

//  Returns the largest number.

// console.log(Math.max(10, 20, 5)); // 20

// 6️ Math.min()

//  Returns the smallest number.

// console.log(Math.min(10, 20, 5)); // 5

// 7️ Math.random()

//  Returns a random number between 0 and 1.

// console.log(Math.random());


// 🎯 Random number between 1 and 10:

// let randomNum = Math.floor(Math.random() * 10) + 1;
// console.log(randomNum);

// 8️ Math.pow()

//  Power (exponent).

// console.log(Math.pow(2, 3)); // 8

// 9️ Math.sqrt()

//  Square root.

// console.log(Math.sqrt(16)); // 4



// Definition

// prompt() is a built-in JavaScript function used to take input from the user through a popup dialog box.

// Syntax
// prompt("message");


Example
1: Number Input
let age = prompt("Enter your age:");
console.log(age);
console.log(typeof age);


Output:

25
string


 Even though you typed a number, it is stored as a string.

  Example 2: Boolean Input
let isStudent = prompt("Are you a student?");
console.log(isStudent);
console.log(typeof isStudent);


Output:

true
string


 Still a string 

Example 3: Convert Input to Number
let num = Number(prompt("Enter a number:"));
console.log(num);
console.log(typeof num);


Output:

10
number

 Example 4: Convert Input to Boolean
let value = Boolean(prompt("Enter something:"));
console.log(value);