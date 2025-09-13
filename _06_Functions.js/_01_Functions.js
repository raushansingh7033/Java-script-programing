// a function is a block of code designed to perform a particular task . it only runs when called / invoked.
// or 
// a function in javaScript is like a reusable set of instructions

//4 ways to create a function
// 1. Without parameter list & without return.
// 2. Without parameter list & with return.
// 3. With parameter list & without return.
// 4. With parameter list & with return.

let n = 5;

function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log("Sum =", sum)
}

function alpha(){
  console.log("hello bhai");
  console.log("kaise ho ");
  console.log("kya kar rahe ho")

}
alpha()