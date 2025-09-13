// Scenario : A website gives discounts based on the total shopping cart 

// Question :
// write a program where:
// if the cart value less than $50, no discount is applied.
// if cart value is between 50 and 100 apply a 10% discount
// if the cart value is more than &100 apply a 20% discount.
// display the final cart total after the discount
let cartValue = 120
let finalCartValue;
if (cartValue < 50) {
  finalCartValue = cartValue;
  console.log("No discount is applied")
} else if (cartValue >= 50 && cartValue <= 100) {
  finalCartValue = cartValue - cartValue * 0.1;
  console.log("A 10% discount has been applied")
} else {
  finalCartValue = cartValue - (cartValue * 0.2)
  console.log("A 20% discount has been applied")
}

console.log(`the final cart total is $${finalCartValue.toFixed(2)}`);
