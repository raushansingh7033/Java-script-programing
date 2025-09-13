let palyAgain = true;
while (palyAgain) {
  alert("You wake in a dark forest")
  let userChoice = prompt("Do you want to go left or right");
  if (userChoice === 'left') {
    alert("You see something shine in a mud");
    userChoice = prompt("Do you pick it up ? (Yes or no)");
    if (userChoice === 'yes') {
      alert("it is a magical sto ne ")
    } else if (userChoice === 'no') {
      alert("you sink slowly in mud")
    }
  } else {
    alert("You find a cave");
    userChoice = prompt("Do you enter the cave (yes or no)")
    if (userChoice === 'yes') {
      alert("you barely escape")
    } else {
      alert("you sleep well")
    }
  }
  userChoice = prompt("Do you want to paly the game again")
  if (userChoice === 'no') {
    palyAgain = 'no';
    alert("Thanks for playing")
  }
}