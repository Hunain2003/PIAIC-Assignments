function factorialize(num)
{
  if (num == 1)
  {
    return 1;
  }
  return num * factorialize(num - 1);
}

var number = parseInt(prompt("Enter a number"));
console.log(factorialize(number));
