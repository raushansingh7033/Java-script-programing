// Template Literals
// A template literal is a special way to write
// strings in JavaScript using backticks (`).
// String literals let you insert variables or
// expressions directly inside the string, which
// is called string interpolation.

// String Interpolation -> string ke andar varible ko insert karna  using string tempalte 
let firstName = "Raushan";
let LastName = "Singh";
let fullName = firstName + " " + LastName

// using template literal
let fullName1 = `${firstName}  ${LastName}`
console.log(fullName)

console.log(`My Name is ${firstName} ${LastName}`)


