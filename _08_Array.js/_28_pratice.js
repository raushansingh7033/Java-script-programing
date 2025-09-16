let str = "hello"
// let str2 = Array.from(str).reverse().join()


let str2 = str.split("").reverse().join("")
console.log(str2)
if (str === str2) {
  console.log("palindrom")
} else {
  console.log("not palindrom")
}