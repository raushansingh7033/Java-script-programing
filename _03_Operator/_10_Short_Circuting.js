// Short-circuiting in JavaScript refers to the way logical operators (&&, ||, and ??) evaluate expressions.
//  It allows you to control the flow and return values based on truthiness without writing full if statements.

//1. || (Logical OR) : Returns the first truthy value or the last value if none are truthy. (Useful for setting default values.)


//2. && (Logical AND): Returns the first falsy value or the last value if none are falsy. (Commonly used to safely access properties.)


//3. ?? (Nullish Coalescing): Returns the right-hand value only if the left is null or undefined.(Better than || when dealing with falsy values like 0 or "" that are still valid.)


// let username = "asdg";
// let password = "asgdsdgsdg";

// let result = (username && password) ? ("sucessfull login") : ("invalid username or password")
// console.log(result)

// console.log("" || undefined || false || null || 0n);
// console.log("rohan" && 23 && 35 && "Mnas Kumar")
let result = "alpha" ?? "mkl";
console.log(result)