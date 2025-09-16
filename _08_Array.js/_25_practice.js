let n = 25;
let arr = new Array(n).fill(0)
arr.forEach((item, index) => {
  arr[index] = index + 1
})
console.log(arr)