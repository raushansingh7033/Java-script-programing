let products = [
  { id: 1, name: "samsung galaxy" }
  , { id: "2", name: "poco m24" },
  { id: 3, name: "apple m2" }
]

function search(products, searchKeyword) {

  let filteredArr = products.filter((item) => item.name.toLowerCase().includes(searchKeyword.toLowerCase()))
  console.log(filteredArr)
}
search(products, "applE ")