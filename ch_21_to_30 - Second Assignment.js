var userInput = prompt("Enter a string").toLowerCase();

var userInputArray = userInput.split(" ");

var finalText = "";

for (let i = 0; i < userInputArray.length; i++) {
  let word = userInputArray[i];
  let titleCaseCharacter = word[0].toUpperCase();
  let titleCaseWord = titleCaseCharacter + word.slice(1, word.length) + " ";
  finalText += titleCaseWord;
}

console.log(finalText);
