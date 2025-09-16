let arr = [10, 20, 30, 40, 50, 60]

let sum = arr.reduce((acc, curr) => acc + curr)

let average = sum / arr.length;
console.log(`sum=${sum}`)
console.log(`average ${average}`)