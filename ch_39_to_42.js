let sum = 0;
for (let i = 0; i < 5; i++) { sum += parseInt(prompt(`Enter marks for course ${i}`)); }
let percentage = sum / 500 * 100;
let grade = ""

switch (true) {
  case (percentage >= 90):
    grade = "A+";
    break;
  case (percentage >= 75):
    grade = "A";
    break;
  case (percentage >= 60):
    grade = "B";
    break;
  case (percentage >= 45):
    grade = "C";
    break;
  case (percentage >= 30):
    grade = "A+";
    break;
  default:
    grade = "F";
}

alert(grade)
