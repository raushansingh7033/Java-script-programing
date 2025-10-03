let obj = {
  firstName: "Raushan",
  middleName: "Kumar",
  lastName: "Singh"
}

let convertToFullName = (param) => {
  console.log(`${param.firstName}${param.middleName}${param.lastName}`)
}
convertToFullName(obj);
