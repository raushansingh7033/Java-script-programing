let color = "red";



function generateInstruction(color) {
  if (color === "green") {
    console.log("go");
  } else
    if (color === "red") {
      console.log("stop");
    } else if (color === "yellow") {
      console.log("caution");
    }
    else {
      console.log("invalid color");

    }
}


generateInstruction("green")

