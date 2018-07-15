function Letter(underlyingCharacter, letterGuessedInd, indivLetter){
    this.underlyingCharacter = underlyingCharacter;
    this.letterGuessedInd = letterGuessedInd;
    //determines whether to display the actual letter, or a '_'
    this.whatToDisplay = function(){
        // console.log("this.letterGuessedInd=" + this.letterGuessedInd);
        if (this.letterGuessedInd == false){
            // console.log("begin this.letterGuessedInd == false")
            this.underlyingCharacter = "_";
        }
        // console.log("underlyingCharacter, letterGuessedInd=" + this.underlyingCharacter + letterGuessedInd);
        return this.underlyingCharacter;
    };
    //checks each letter to see if already guessed, and updates indicator
    this.checkCharacter = function(userGuess){
        if (this.userGuess = this.underlyingCharacter){
            this.letterGuessedInd = true;
            // console.log("letterGuessedInd=" + this.letterGuessedInd);
        }
    }
}

module.exports = Letter;


