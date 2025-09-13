// calculate how many vowels and consonents are in a given string using for of loop

let string = "hello";
let vowelCount = 0, consonentCount = 0;

for (let letter of string) {
  if (letter === 'a' || letter === 'e' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
    vowelCount++;
  } else if (letter === " ") {
    console.log("Space not Counted");
  }
  else {
    consonentCount++;
  }
}

console.log("Vowel =" + vowelCount);
console.log("Consonent " + consonentCount)
