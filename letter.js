function Letter(underlyingCharacter, letterGuessedInd){

    this.underlyingCharacter = underlyingCharacter;

    this.letterGuessedInd = letterGuessedInd;

    //determines whether to display the actual letter, or a '_'
    this.whatToDisplay = function(){
        if (this.letterGuessedInd == false){
            this.underlyingCharacter = "_";
        }
        return this.underlyingCharacter;
    };

    //checks each letter to see if already guessed, and updates indicator
    this.checkCharacter = function(userGuess){
        if (userGuess == this.underlyingCharacter){
            this.letterGuessedInd = true;
        };
        return this.letterGuessedInd;
    };
};

module.exports = Letter;