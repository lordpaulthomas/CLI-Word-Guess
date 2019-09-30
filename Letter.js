var colors = require('colors');

var Letter = function(char){
  this.char = char;
  this.correctGuess = false;
}
Letter.prototype.letterReturn = function (){
  if(this.correctGuess){
    return this.char.cyan
  }
  else{
    return '_'.cyan;
  }
}

Letter.prototype.letterCheck = function (guess){

  if (this.char === guess){
    return this.correctGuess = true;
  }
  else {
    return this.correctGuess = false;
  }
}

module.exports = Letter;