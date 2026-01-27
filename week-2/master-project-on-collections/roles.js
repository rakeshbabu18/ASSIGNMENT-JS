const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// Get all role names
const roleNames = Object.keys(roles);

// Check if student can delete
const studentCanDelete = roles.student.includes("delete");

// Flat list of all unique permissions
const allPermissions = [
  ...new Set(Object.values(roles).flat())
];

// Add moderator role immutably
const updatedRoles = {
  ...roles,
  moderator: ["view", "update"]
};
