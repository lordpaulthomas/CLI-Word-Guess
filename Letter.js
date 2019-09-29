var Letter = function(char){
  this.char = char;
  this.correctGuess = false;
}
Letter.prototype.letterReturn = function (){
  if(this.correctGuess){
    return this.char
  }
  else{
    return '_';
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