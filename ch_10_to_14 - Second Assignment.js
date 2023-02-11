const totalMarks = 500;

let course1 =+ prompt("Enter course 1 marks: ");
let course2 =+ prompt("Enter course 2 marks: ");
let course3 =+ prompt("Enter course 3 marks: ");
let course4 =+ prompt("Enter course 4 marks: ");
let course5 =+ prompt("Enter course 5 marks: ");

let obtainedMarks = course1 + course2 + course3 + course4 + course5;
let percentage = obtainedMarks/totalMarks * 100;

alert(`You scored ${percentage}%!`);