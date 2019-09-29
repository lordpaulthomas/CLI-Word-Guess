var Word = require("./Word");
var inquirer = require("inquirer");








function getWordToGuess() {
  var randomWordArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  var randomNumber = Math.floor((Math.random() * 11) + 1)
  var randomWord = randomWordArray[randomNumber]
  var targetWord = new Word(randomWord);
  return targetWord;
}


var word = getWordToGuess()
var guessedLetters = [];
word.wordMaker();
function getUserGuess() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Guess a letter",
        name: "letterGuess"
      }
    ])
    .then(function (response) {
      userGuess = response.letterGuess
      lives = 5;
      
      word.wordMaker()
      word.checker(userGuess)
    
      guessedLetters.push(userGuess + " - ")
      console.log("\nGuesses Left: " + lives)
      console.log("Guessed so far - " + guessedLetters.join(" "))
      word.wordMaker()
      if (!checkForWin(word)) {
        getUserGuess()
      }
      else (console.log("You got it!"))

    }
    )
}

getUserGuess()



const checkForWin = (string) => {
 
  for (let i = 0; i < string.wordArray.length; i++) {

    if (string.wordArray[i].correctGuess === false) {
      return false
    }
  }
  return true;
}
