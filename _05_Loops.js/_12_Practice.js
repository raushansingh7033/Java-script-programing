
let computerNumber = 6;
let guess = null

while (guess !== computerNumber) { }
guess = Number(prompt("Guess A Number"))
if (isNaN(guess)) {
  console.log("Number is invalid , please try again");
} else if (guess < computerNumber) {
  console.log("Number is too low! please try");
} else if (guess > computerNumber) {
  console.log("Number is high , please try again");
} else {
  alert("Congratulation!.. Your guess is correct!!")
}