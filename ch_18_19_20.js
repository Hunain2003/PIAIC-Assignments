let courses = [];

for (let i = 0; i < 5; i++)
{
  courses.push(prompt("course " + i + " name", courses[i]));
}

alert(courses);

for (let i = 0; i < 5; i++)
{
  courses.splice(i, 1, prompt("course " + i, courses[i]));
}

alert(courses);
