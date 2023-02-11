let num1 =+ prompt("Enter number 1: ");
let num2 =+ prompt("Enter number 2: ");
let sign = prompt('Enter sign: "+" or "-" or "*" or "/" or "%"');

if (sign == "+")
{
    alert(`${num1} ${sign} ${num2} = ${num1 + num2}`);
}
else if (sign == "-")
{
    alert(`${num1} ${sign} ${num2} = ${num1 - num2}`);
}
else if (sign == "*")
{
    alert(`${num1} ${sign} ${num2} = ${num1 * num2}`);
}
else if (sign == "/")
{
    alert(`${num1} ${sign} ${num2} = ${num1 / num2}`);
}
else if (sign == "%")
{
    alert(`${num1} ${sign} ${num2} = ${num1 % num2}`);
}
else {
    alert("Please enter right operator");
}