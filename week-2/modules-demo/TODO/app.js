import { addTask, getAllTasks, completeTask } from "./task.js";

//Add tasks
console.log(addTask("Learn JavaScript", "high", "2026-02-10"));
console.log(addTask("Practice Git", "medium", "2026-02-05"));
console.log(addTask("Do Assignment", "low", "2026-01-10")); 

//Display all tasks
console.log("All Tasks:", getAllTasks());

//Complete a task
console.log(completeTask(1));

//Display all tasks again
console.log("Updated Tasks:", getAllTasks());
