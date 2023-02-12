let courses = [];

let course1 = prompt("course 1 ", "computer");
courses.push(course1);
let course2 = prompt("course 2 ", "python");
courses.push(course2);
let course3 = prompt("course 3 ", "java");
courses.push(course3);
let course4 = prompt("course 4 ", "docker");
courses.push(course4);
let course5 = prompt("course 5 ", "html");
courses.push(course5);

alert(courses)

course1 = prompt("course 1 ", course1);
courses.splice(0, 1, course1);
course2 = prompt("course 2 ", course2);
courses.splice(1, 1, course2);
course3 = prompt("course 3 ", course3);
courses.splice(2, 1, course3);
course4 = prompt("course 4 ", course4);
courses.splice(3, 1, course4);
course5 = prompt("course 5 ", course5);
courses.splice(4, 1, course5);

alert(courses);
