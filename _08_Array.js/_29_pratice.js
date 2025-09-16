let str = "hello hoe are you"
let str2 = str.split(" ")
console.log(str2)
let str3 = "hello".charAt().toUpperCase() + "hello".slice(1)
console.log(str3)

let str4 = "hello how are you"
let newArr = str.split(" ").map((elem) => {
  return elem.charAt(0).toUpperCase() + elem.slice(1)
})

console.log(newArr.join(" "))