var Word = require("./Word");
var inquirer = require("inquirer");
var colors = require('colors');






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
        message: "Guess a letter".yellow,
        name: "letterGuess"
      }
    ])
    .then(function (response) {
      userGuess = response.letterGuess
      word.checker(userGuess.toLowerCase())
      if (word.checkerReturn(userGuess)) {
        console.log("\nCORRECT!!!".green +"\n")
        word.wordMaker()
        console.log("\n")
        if (!checkForWin(word)) {
          getUserGuess()
        }
        else {
          (console.log("You got it!\n".rainbow))
          inquirer
          .prompt([
            {
              type: "confirm",
              message: "Wanna Play Again".yellow,
              name: "confirm",
              default: false
            }
          ]).then(function (response) {
            if (response.confirm) {
              lives = 5;
              word = getWordToGuess()
              console.log("\n")
              word.wordMaker()
              console.log("\n")
              getUserGuess()
            }
            else {
              console.log("\nThanks for playing!\n\nSee you next time!\n".rainbow)
            }
          })
        }

      }
      else {
        lives--
        if (lives === 0) {
          console.log("\nINCORRECT!!!".red + "\n\nYou have ".magenta + lives.toString().yellow + " guesses remaining\n".magenta)
          word.wordMaker()
          console.log("\n")
          console.log("Game Over\n".rainbow)

          inquirer
            .prompt([
              {
                type: "confirm",
                message: "Wanna Play Again".yellow,
                name: "confirm",
                default: false
              }
            ]).then(function (response) {
              if (response.confirm) {
                lives = 5;
                word = getWordToGuess()
                console.log("\n")
                word.wordMaker()
                console.log("\n")
                getUserGuess()
              }
              else {
                console.log("\nThanks for playing!\n\nSee you next time!\n".rainbow)
              }
            })
        }
        else {
          console.log("\nINCORRECT!!!".red + "\n\nYou have ".magenta + lives.toString().yellow + " guesses remaining\n".magenta)
          word.wordMaker()
          console.log("\n")
          getUserGuess()
        }
      }
    }
    )
    .catch(function(err){
      if (err){
        return console.log(err)
      }
    })
}




const checkForWin = (string) => {

  for (let i = 0; i < string.wordArray.length; i++) {

    if (string.wordArray[i].correctGuess === false) {
      return false
    }
  }
  return true;
}
