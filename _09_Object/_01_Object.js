let obj = {
  name: "Raushan",
  age: 19,
  isMarried: false,
  Address: {
    city: "Buxar",
    state: "Bihar",
    Country: "India"
  }
}

console.log(obj)

let car = {
  brand: "Rollce Royal",
  color: "red",
  "Full name": "Raushan singh",
  maxSpeed: 180,

  stop: () => {
    console.log(
      "stopping  the car ... "
    )
  },
  start: () => {
    console.log("Starting the car ...")
  }
}
console.log(car)
console.log(car.brand)
car.stop()

console.log(
  car["brand"]
)

car["stop"]()

console.log(car["Full name"])