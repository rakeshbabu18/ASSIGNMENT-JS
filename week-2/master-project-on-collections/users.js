const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

// Active users
const activeUsers = users.filter(u => u.active);

// Names of active users
const activeUserNames = activeUsers.map(u => u.name);

// Check if admin exists
const adminExists = users.some(u => u.role === "admin");

// Find user by id
const userById = users.find(u => u.id === 2);

// Deactivate user immutably (id = 1)
const updatedUsers = users.map(u =>
  u.id === 1 ? { ...u, active: false } : u
);
