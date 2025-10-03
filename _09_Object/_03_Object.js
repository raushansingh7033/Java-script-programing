let obj = {
  name: "alpha",
  greet: function () {
    console.log("Hello i am " + `${this.name}`)
  }
}

let obj1 = {
  name: "alpha",
}
obj1.greet = function () {
  console.log(this)
}

obj1.greet();

//of index par iterate karta hai
// in key par iterate karta hai
for (let test in obj) {
  console.log(test)
  console.log(obj[test])
}

