let totalBalance =10000;
let userChoice=prompt("enter your choice [1. check Balance 2. Deposit 3. WithDraw 4. Exit :]");
if(userChoice===1){
  console.log("Your current balance is :",totalBalance)
}else if(userChoice===2){
  let DepositAmount=Number(prompt("Enter Amount to deposit : "));
  if(DepositAmount>0){
    totalBalance+=DepositAmount;
    console.log("")
  }
}else if(userChoice===3){
  let withDrawAmount=Number(prompt("Enter Amount to deposite :"));
  if(withDrawAmount>0 && withDrawAmount<=totalBalance){
    totalBalance -=withDrawAmount
  }else{
    
  }
}