const employees = [
  {
    name: "John",
    age: 26,
    job: "WordPress Developer"
  },
  {
    name: "Jane",
    age: 30,
    job: "React Developer"
  },
  {
    name: "Bob",
    age: 35,
    job: "Node.js Developer"
  }
];

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i];

  console.log(`Name: ${employee.name}, Age: ${employee.age}, Job: ${employee.job}`);
}