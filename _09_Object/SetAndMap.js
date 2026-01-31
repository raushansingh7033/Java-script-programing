Set and Map in JavaScript(with Examples)

Both Set and Map are ES6(ES2015) data structures.

✅ 1. Set in JavaScript
🔹 Definition

👉 A Set is a collection of unique values(no duplicates allowed).

✅ Example 1: Create a Set
let mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(10); // duplicate, ignored

console.log(mySet);


Output:

Set(2) { 10, 20 }

✅ Example 2: Set with Array
let arr = [1, 2, 2, 3, 4, 4];

let uniqueSet = new Set(arr);

console.log(uniqueSet);


👉 Removes duplicates.

✅ Example 3: Set Methods
let s = new Set([1, 2, 3]);

console.log(s.has(2)); // true
console.log(s.size);   // 3

s.delete(1);
console.log(s);

s.clear();
console.log(s);

✅ Real Use Case of Set

Remove duplicates from array:

let arr = [1, 2, 2, 3];
let uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1, 2, 3]

✅ 2. Map in JavaScript
🔹 Definition

👉 A Map is a collection of key - value pairs where keys can be of any type.

✅ Example 1: Create a Map
let myMap = new Map();

myMap.set("name", "Raushan");
myMap.set("age", 22);
myMap.set(1, "number key");

console.log(myMap);

✅ Example 2: Get Values
console.log(myMap.get("name")); // Raushan
console.log(myMap.get("age"));  // 22

✅ Example 3: Map Methods
let m = new Map();

m.set("a", 10);
m.set("b", 20);

console.log(m.has("a")); // true
console.log(m.size);     // 2

m.delete("a");
console.log(m);

✅ Example 4: Looping Map
let m = new Map([
  ["name", "Stephen"],
  ["city", "Delhi"]
]);

for (let [key, value] of m) {
  console.log(key, value);
}

✅ Difference Between Set and Map(Interview Important 🔥)
Feature	Set	Map
Stores	Unique values	Key - value pairs
Duplicate allowed ?	❌ No
	✅ Keys must be unique
Key type No keys	Any type
Use case	Remove duplicates	Store data like objects
✅ Short Interview Definition 🧠

Set:
👉 A Set is a collection of unique values in JavaScript.

  Map:
👉 A Map is a collection of key - value pairs where keys can be of any data type.

✅ Real Interview Example(Combined)
let users = new Set(["A", "B", "A"]);
console.log(users); // unique users

let userAge = new Map();
userAge.set("A", 21);
userAge.set("B", 22);

console.log(userAge.get("A")); // 21