let arr = [5, 6, 14, 20, 1];

// higher order function -- jo function parameter function me leta hai
arr.map((ele, idx, arr) => {
  console.log(ele, idx, arr)
  console.log()
})

//for in gives index
//for of gives value