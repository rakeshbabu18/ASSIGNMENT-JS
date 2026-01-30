const employees = [
    { id: 201, name: "Amit", salary: 45000, department: "IT" },
    { id: 202, name: "Neha", salary: 60000, department: "HR" },
    { id: 203, name: "Rahul", salary: 75000, department: "IT" },
    { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
  ];

// filter() employees from IT department
let result1 = employees.filter(ele => ele.department == "IT")
console.log(result1)


// map() to add:
//netSalary = salary + 10% bonus
let result2 = employees.map(ele=>{
  return{
    netSalary: ele.salary+((0.1)*ele.salary)
  }
})
console.log(result2)

//reduce() to calculate total salary payout
let result3 = Object.values(employees).reduce((acc, ele) => acc+ele.salary,0)
console.log(result3)

//find() employee with salary 30000
let result4 = employees.find(ele => ele.salary === 30000);
console.log(result4)

//findIndex() of employee "Neha"
let result5 = employees.findIndex(ele => ele.name === "Neha");
console.log(result5)