let exObj = {
  name: "Raushan Singh",
  age: 21,
  address: {
    city: "Buxar",
    state: "Bihar",
    Country: "India"
  }
}


for (let obj in exObj) {
  console.log(exObj[obj]);
}