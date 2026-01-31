Recursion is a programming technique in which a function calls itself to solve a problem.

A recursive function must have:
1️ Base Case (to stop recursion)
2️ Recursive Call (function calls itself)

function printNumbers(n) {
  if (n > 5) {   // base case
    return;
  }
  console.log(n);
  printNumbers(n + 1); // recursive call
}

printNumbers(1);