
Array Destructuring is a JavaScript feature that allows you to extract values from an array and assign them to variables easily.

 1. Basic Example
let arr = [10, 20, 30];

let [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


 Here, values of the array are assigned to variables a, b, c.

 2. Skipping Values
let arr = [1, 2, 3, 4];

let [x, , y] = arr;

console.log(x); // 1
console.log(y); // 3


 We skipped the second value using a comma.

 3. Using Default Values
let arr = [5];

let [a, b = 10] = arr;

console.log(a); // 5
console.log(b); // 10


 If value is missing, default value is used.

 4. Swapping Variables (Very Common Interview Question)
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a); // 10
console.log(b); // 5


 No third variable needed! 🔥

 5. Rest Operator with Destructuring
let arr = [10, 20, 30, 40];

let [first, second, ...rest] = arr;

console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40]


 ...rest stores remaining values.

 6. Function Return with Destructuring
function getNumbers() {
  return [100, 200];
}

let [a, b] = getNumbers();

console.log(a); // 100
console.log(b); // 200
