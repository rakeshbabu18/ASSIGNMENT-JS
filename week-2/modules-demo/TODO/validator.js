//Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if(title!="" && title.length<=3)
    return false
  return true
}

//Validate priority (low, medium, high)
function validatePriority(priority) {
  return ["low", "medium", "high"].includes(priority);
}

//Validate due date (must be future date)
function validateDueDate(date) {
  let due = new Date(date);
  let today = new Date();
  return due > today;
}

export { validateTitle, validatePriority, validateDueDate };
