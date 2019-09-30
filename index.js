var Word = require("./Word");
var inquirer = require("inquirer");







function getWordToGuess() {
  var randomWordArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  var randomNumber = Math.floor((Math.random() * 11) + 1)
  var randomWord = randomWordArray[randomNumber]
  var targetWord = new Word(randomWord);
  return targetWord;
}


lives = 5;
var word = getWordToGuess()
console.log("\n")
word.wordMaker();
console.log("\n")
getUserGuess()



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
      word.checker(userGuess.toLowerCase())
      if (word.checkerReturn(userGuess)) {
        console.log("\nCORRECT!!!\n")
        word.wordMaker()
        console.log("\n")
        if (!checkForWin(word)) {
          getUserGuess()
        }
        else (console.log("You got it!\n"))
      }
      else {
        lives--
        if (lives === 0) {
          console.log("Game Over\n")

          inquirer
            .prompt([
              {
                type: "confirm",
                message: "Wanna Play Again",
                name: "confirm",
                default: false
              }
            ]).then(function (response) {
              if (response.confirm) {
                console.log("\nToo bad\n")
              }
              else {
                console.log("\nThanks for playing!\n\nSee you next time!\n")
              }
            })
        }
        else {
          console.log("\nINCORRECT!!!\n\nYou have " + lives + " guesses remaining\n")
          word.wordMaker()
          console.log("\n")
          getUserGuess()
        }
      }
    }
    )
}




const checkForWin = (string) => {

  for (let i = 0; i < string.wordArray.length; i++) {

    if (string.wordArray[i].correctGuess === false) {
      return false
    }
  }
  return true;
}
