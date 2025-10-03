let obj = {
  name: "Raushan",
  age: 24,

}

let keys = Object.keys(obj)
console.log(keys)

let value = Object.values(obj)
console.log(value)

let keyvalue = Object.entries(obj);
console.log(keyvalue)



// copy 
let obj1 = {
  name: "Raushan",
  age: 21
}

let obj2 = {
  ...obj1
}
let obj3 = {}
Object.assign(obj2, obj3)


let obj4 = {
  name: "Raushan",
  age: 24
}
Object.freeze(obj4)
delete obj4.name;
obj4.city = "Buxar"


Object.seal(obj);
obj.city = "fjsdl",
  delete obj.name;
console.log(obj4.hasOwnProperty("name"))


