function generateUserName(fullName){
  return "@"+fullName.trim().replaceAll(" ")+fullName.length;
}

let username=generateUserName("raushan");
console.log(username)