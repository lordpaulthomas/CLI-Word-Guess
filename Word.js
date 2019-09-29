var Letter = require("./Letter");
var Word = function (word) {
  this.word = word;
  this.wordArray = [];
  for (let i = 0; i < this.word.length; i++) {
    this.wordArray[i] = new Letter(this.word[i])
  }
  // console.log(this.wordArray)

  this.wordMaker = function () {
    var arr = []
    for (let i = 0; i < this.wordArray.length; i++) {
      arr[i] = this.wordArray[i].letterReturn();
    }
    console.log(arr.join(" "));

  }

  this.checker = function (guess) {
    // console.log('hello')
    for (let i = 0; i < this.wordArray.length; i++) {
      if (this.wordArray[i].correctGuess === true) {
        this.wordArray[i].correctGuess = true;
      }
      else {
        this.wordArray[i].correctGuess = this.wordArray[i].letterCheck(guess)
      }
    }
  }
}

module.exports = Word;


// var word = new Word('fish');
// console.log(word.wordMaker())
// word.checker('i')
// console.log(word.wordMaker())
// word.checker('s')
// console.log(word.wordMaker())

// word.checker('h')
// console.log(word.wordMaker())

// word.checker('f')
// console.log(word.wordMaker())


