let userInput = Math.ceil(parseInt(prompt("Enter a number")));
var text = "This is my dummy text";

var sliceText = text.slice(0, userInput + 1);

var reversedText = "";

for (let i = userInput; i >= 0; i--)
{
  reversedText += sliceText[i]
}

console.log(reversedText);
