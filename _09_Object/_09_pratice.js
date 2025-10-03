let users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "charlie", role: "admin" }
]

let allAdmin = (users) => {
  let admin = [];
  for (let user of users) {
    for (let u in user) {
      if (user[u] === "admin") {
        admin.push(user)
      }
    }
  }
  console.log(admin)
}
allAdmin(users)

let filtered = users.filter((item) => {
  console.log(item);
  return item.role === 'admin'
})
let finalarr = filtered.map((item) => {
  return item.name
})
console.log(filtered)
console.log(finalarr)
