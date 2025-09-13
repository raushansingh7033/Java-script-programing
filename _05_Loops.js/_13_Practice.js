let password = "alpha";
let noOfAttempt = 0;
let userPassword = null;

while (password !== userPassword && noOfAttempt < 3) {
  userPassword = prompt("Enter the password")
  noOfAttempt++;
  if (userPassword === password) {
    console.log("congratulation your password is match ");

  } else if (noOfAttempt >= 3) {
    alert("Your attempt is over , sorry")
  } else {
    log("Your password is incorrect")
  }
}