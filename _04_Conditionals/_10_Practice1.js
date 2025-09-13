//Q.1- Give choice to the user to select theme color and set the selected theme color and console it.

let color = 'white';
let theme = prompt("Enter your theme color(light,dark,pink,green) : ");

if (theme === "light") {
  color = 'white'
} else if (theme === "dark") {
  color = 'black'
} else if (theme === "green") {
  color = 'green'
} else if (theme === "pink") {
  color = 'pink'
} else {
  console.log("Invalid theme");

}

console.log(`your selected theme is ${theme} and color is ${color} respectively`)