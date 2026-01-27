import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];

//Add new task
function addTask(title, priority, dueDate) {
  if (
    !validateTitle(title) ||
    !validatePriority(priority) ||
    !validateDueDate(dueDate)
  ) {
    return "Invalid task data";
  }

  const task = {
    id: tasks.length + 1,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(task);
  return "Task added successfully";
}

//Get all tasks
function getAllTasks() {
  return tasks;
}

//Mark task as complete
function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return "Task not found";
  }

  task.completed = true;
  return "Task marked as complete";
}

export { addTask, getAllTasks, completeTask };
