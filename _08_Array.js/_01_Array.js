// An array is a list that can store multiple values in one place.Think of it like a row of boxes, where each box can hold one item (like a number, word, etc.).You can use it to group similar things together.

// type of array is not array it is object

let arr5 = []
console.log(typeof arr5)

// arrays are mutable
let arr4 = [1, 2, 3, 4, 5]
console.log(arr4[0]);
console.log(arr4[2])
arr4[4] = 99;
console.log(arr4)
arr4[0] = 4
console.log(arr4)
// heap memory -- dynamic memory -- array store hota
// STACK memory -- address store hota hai
let colors = ["red", "blue", "green"];
let marks = [23, 94, 55, 26, 84, 89];
let personDetails = ["Muskan", 18, "Bhagalpur"];

let arr = new Array("spiderman", "ironman", "thor");
console.log(arr.sort())

let arr1 = ["ram", "mohan", ["sohan", "ramu"]]
console.log(arr1)


let arr3 = new Array("ramu", 1, 2, 3, "rohan")
console.log(arr3)


let arr6 = [1, 2, 3, 4, 5, 6, 7]
for (let index = 0; index < arr6.length; index++) {
  const element = arr6[index];
  console.log(element)
}

let arr7=[1,2,3,4,5,6,7]
for (const element of arr7) {
  console.log(element)
}

for (const key in arr7) {
  console.log(key)  
}