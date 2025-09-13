let fullname = "Raushan Singh"

function CreateUserName(fullname) {
  let userName = "@" + fullname.trim().replaceAll(" ", "") + "_" + fullname.length;
  return userName;
}

console.log(CreateUserName(fullname))