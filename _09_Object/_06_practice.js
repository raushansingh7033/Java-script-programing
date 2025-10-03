let person = {
  name: "Raushan",
  age: 21,
  city: "buxar"
}
person.email = "raushan@gamil.com"
delete person.city
for (let val in person) {
  console.log(person[val])
}