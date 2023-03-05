let name = prompt("Enter your name");
let dob_day = prompt("Enter day of birth");
let dob_month = prompt("Enter month of birth");
let dob_year = prompt("Enter year of birth");
let time = "";
const dob = new Date()

dob.setFullYear(dob_year, dob_month, dob_day)

var mdate = dob.toString();  
var dobYear = parseInt(mdate.substring(0,4), 10);  
var dobMonth = parseInt(mdate.substring(5,7), 10);  
var dobDate = parseInt(mdate.substring(8,10), 10);  

var today = new Date();  
var birthday = new Date(dob);  

var diffInMillisecond = today.valueOf() - birthday.valueOf();  

var year_age = Math.floor(diffInMillisecond / 31536000000);  
var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);  
      
let hour = new Date().getHours();

if (hour > 0 && hour < 12) time = { "morning"; }
else if (hour >= 12 && hour < 17) { time = "afternoon"; }
else if (hour >= 17 && hour < 20) { time = "evening"; }
else { time = "night"; }

console.log(`Hello ${name}, Good ${time}`);
console.log(`Your DOB in ${dob}`);

if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {  
        alert("Happy Birthday!");  
}     
else {
  var month_age = Math.floor(day_age / 30);          
  day_ageday_age = day_age % 30;      
  var tMnt = (month_age + (year_age * 12));  
  var tDays = (tMnt * 30) + day_age;  
  console.log(year_age + " years " + month_age + " months " + day_age + " days")  
}
