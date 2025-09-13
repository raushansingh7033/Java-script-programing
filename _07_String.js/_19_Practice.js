let str = "Raushan"
let ch = "a"
let count = 0;
for (let val of str) {
  if (val.toLocaleLowerCase() === ch.toLocaleLowerCase()) {   
    count++;
  }
}

console.log(count)