let obj1 = new Object({
  name: "Raushan",
})
obj1.age = 21
console.log(obj1)

let obj = {
  // *:"raushan"
  "*": "Raushan"
}

//  console.log(obj.*)
console.log(obj["*"])


let obj2 = {
  name: "Raushan",
  age: 21
}

obj2.city = "Buxar"
console.log(obj2)

delete obj2.age;
console.log(obj2)