/*
Define 10 students in JSON
Store it in an array
Find the female students
Find the students who are following IT course
Find the max and average GPA among the students
*/

const studentlist = [
  {"id": 1, "name": "John Doe", "gender": "Male", "course": "IT", "gpa": 3.8},
  {"id": 2, "name": "Jane Smith", "gender": "Female", "course": "Business", "gpa": 3.6},
  {"id": 3, "name": "Alice Brown", "gender": "Female", "course": "IT", "gpa": 3.9},
  {"id": 4, "name": "Bob Johnson", "gender": "Male", "course": "Engineering", "gpa": 3.2},
  {"id": 5, "name": "Emily Davis", "gender": "Female", "course": "IT", "gpa": 4.0},
  {"id": 6, "name": "Michael Wilson", "gender": "Male", "course": "IT", "gpa": 3.5},
  {"id": 7, "name": "Sarah Miller", "gender": "Female", "course": "Medicine", "gpa": 3.7},
  {"id": 8, "name": "Chris Evans", "gender": "Male", "course": "Business", "gpa": 3.4},
  {"id": 9, "name": "Sophia Turner", "gender": "Female", "course": "IT", "gpa": 3.8},
  {"id": 10, "name": "David White", "gender": "Male", "course": "Engineering", "gpa": 3.1}
];

// Find Female Students 
let femaleStudents = [];
for (let i = 0; i < studentlist.length; i++) {
  if (studentlist[i].gender === "Female") {
    femaleStudents.push(studentlist[i]);
  }
}
console.log("Female Students:", femaleStudents);

// Find Students in IT Course
let itStudents = [];
for (let i = 0; i < studentlist.length; i++) {
  if (studentlist[i].course === "IT") {
    itStudents.push(studentlist[i]);
  }
}
console.log("Students in IT Course:", itStudents);

// Find Maximum and Average GPA
let totalGPA = 0;
let maxGPA = studentlist[0].gpa;

for (let i = 0; i < studentlist.length; i++) {
  totalGPA += studentlist[i].gpa;
  if (studentlist[i].gpa > maxGPA) {
    maxGPA = studentlist[i].gpa;
  }
}

let avgGPA = totalGPA / studentlist.length;
console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));