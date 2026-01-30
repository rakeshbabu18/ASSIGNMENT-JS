const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
console.log("Adding new attribute")
user.lastlogin="2026-01-01"
console.log(user)

console.log("Updating the property")
user.role="admin"
console.log(user)

console.log("Deleting the property")
delete(user.isActive)
console.log(user)

console.log("Keys")
console.log(Object.keys(user))