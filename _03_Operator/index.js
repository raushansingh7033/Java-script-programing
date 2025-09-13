//1. Get user to input two number using prompt and print their possible arithmetic results.

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter 2nd number: "));

console.log("num1 + num2 = ", num1 + num2);
console.log("num1 - num2 = ", num1 - num2);
console.log("num1 * num2 = ", num1 * num2);
console.log("num1 / num2 = ", num1 / num2);
console.log("num1 % num2 = ", num1 % num2);
console.log("num1 ** num2 = ", num1 ** num2);

//2. Can you chain assignment operators?

let a = b = c = 15;
console.log(a)
console.log(b)
console.log(c)


//3. Get user to input a number using prompt and check whether even or odd using ternary operator.

let num1 = Number(prompt("Enter number: "));

let result = (num1 % 2 === 0) ? "Even number" : "odd number";
console.log(result);

//What is the final value of x?
let x = 5;
console.log(x)
x += 3; // x = x + 3 → 8
console.log(x)
x -= 2; // x = x - 2 → 6
console.log(x)
x *= 4; // x = x * 4 → 24
console.log(x)
x /= 6; // x = x / 6 → 4
console.log(x)
x %= 3; // x = x % 3 -> 1
console.log(x)

//5. Check if a number is within a range between 10 and 20 (inclusive).
//10. What will be the output of the following JavaScript code?
let num = 10;
let result = (num >= 10 && num <= 20)
console.log(result);
//6. Write a program to find the largest number between 3 numbers using ternary operator.

let a = 1, b = 13, c = 2;
let result = a > b ? (a > c ? a : c) : (b > c ? b : c)
console.log(result);


// 7. Take an email and password from the user. If the email or password is incorrect or does not match the stored values, display the message "Invalid email or password." If both email and password match the stored values, display "You are logged in successfully!"
let username = "mkl";
let password = "12345";

let databaseUser = "mkl";
let databasePassword = "12345"

let result = (username && password && username === databaseUser && password === databasePassword)
  ?
  "login successfull"
  :
  "invalid username or password"

console.log(result)

//8. What will be the output of the following JavaScript code?

let a = 5, b = 3, c = 2;

let result = a++ + --b * c-- - ++a + b-- / --c;

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("result:", result);

//9. What will be the output of the following JavaScript code?
let x = 10;
let y = 5;
let z = "10";

x += y * 2;  // Arithmetic + Assignment
let isEqual = x == z; // Loose comparison
let isStrictEqual = x === z; // Strict comparison
let logicTest = (isEqual || isStrictEqual) && !(y > 10); // Logical + Comparison + NOT

let result = logicTest ? ++x : --y; // Ternary + Pre-increment/Pre-decrement

console.log("x:", x);
console.log("y:", y);
console.log("z:", z);
console.log("isEqual:", isEqual);
console.log("isStrictEqual:", isStrictEqual);
console.log("logicTest:", logicTest);
console.log("result:", result);
console.log("Type of z:", typeof z); // Unary operator typeof

//10. What will be the output of the following JavaScript code?
let a = 6; // binary: 110
let b = 3; // binary: 011
let c = "6";

// a += b << 1; // Bitwise left shift + assignment (b << 1 = 6)

a = a+b<<1;
console.log(a);

let d = a & b; // Bitwise AND → 12 & 3 = 00001100 & 00000011 = 00000000
let e = a | b; // Bitwise OR → 12 | 3 = 00001111 = 15
let f = a ^ b; // Bitwise XOR → 12 ^ 3 = 00001100 ^ 00000011 = 00001111 = 15
let g = ~a;  // Bitwise NOT → ~12 = -13

let check = (a == c) && (d < e) || !(f === e); // Mixed logical, comparison

let result = check ? typeof g : --b; // Ternary + unary + typeof

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("d (a & b):", d);
console.log("e (a | b):", e);
console.log("f (a ^ b):", f);
console.log("g (~a):", g);
console.log("check:", check);
console.log("result:", result);

console.log(2 < "6")
      