var Letter = require("./Letter")
var colors = require("colors")

var letterArray = [];
var indivLetter = "";
var letterObject = "";
var displayString = "";
var selectedLetters = [ "" ];

function Word(){
    //Use the word that the computer picked, and build and object for each letter within the array. Each object is false to start with and will initially display as '_', except for spaces which will be true and displayed.
    this.populateWord = function(computerPick, letterArray) {
        for (var i=0; i < computerPick.length; i++) {
            indivLetter = computerPick.charAt(i);
            //Spaces set to true, so they show up as a space instad of a '_'
            if (indivLetter === " ") {
                letterObject = { [indivLetter] : true };
            }
            //Letters set to '_' for each position
            else {
                letterObject = { [indivLetter] : false };
            }
            letterArray[i] = letterObject;
        }
        return letterArray;
    },

    this.displayWord = function(letterArray) {
        //displayString will display the full word, or '_' placeholders where they haven't been guessed yet
        displayString = "";
        for (var i=0; i < letterArray.length; i++) {
            //underlyingCharacter is each individual letter, stored as an object as {name, boolean} within an array, and retrieved here by just pulling the actual object name (which is also the letter)
            var underlyingCharacter = Object.keys(letterArray[i]);
            //letterGuessedInd is the value of the same object, which is a boolean
            var letterGuessedInd = letterArray[i][underlyingCharacter];
            //Letter constructor function
            var letter = new Letter(underlyingCharacter, letterGuessedInd);
            //Displays either the actual letter, or a '_'
            var displayValue = letter.whatToDisplay(underlyingCharacter, letterGuessedInd)
            letter.whatToDisplay(underlyingCharacter, letterGuessedInd);
            //Build the screen display string
            displayString += displayValue + " ";
        }
        console.log("\n" + displayString + "\n");
    },

    this.evaluateUserGuess = function(letterArray, userGuess, returnArray) {
        //returnArray[2] is an array in an array - and holds of all letters that were already picked. Stored as an array in an array so it can be sent and returned along with with some other indiocators.
        selectedLetters = returnArray[2];
        var pickInd = "N";
        for (var i=0; i < letterArray.length; i++) {
            //underlyingCharacter is each individual letter, stored as an object as {name, boolean} within an array, and retrieved here by just pulling the actual object name (which is also the letter)
            var underlyingCharacter = Object.keys(letterArray[i]);
            //letterGuessedInd is the value of the same object, which is a boolean
            var letterGuessedInd = letterArray[i][underlyingCharacter];
            if (userGuess == underlyingCharacter){
                if (!letterGuessedInd){
                    //A correct guess, and that letter hasn't been picked already
                    pickInd = "Y";
                    //returnArray[1] hold a counter of number of letter that have been correctly guessed. Stored as an array in an array so it can be sent and returned along with other things.
                    returnArray[1]++;
                }
            }
            //Letter constructor function
            var letter = new Letter(underlyingCharacter, letterGuessedInd);
            //Checks each letter to see if already guessed, and updates boolean value for that letter in the array holding the letter objects
            letterArray[i][underlyingCharacter] = letter.checkCharacter(userGuess);
        }
        
        var foundLetter = false;
        //Checking array to see if a the user's guess was previously entered
        for (var f=0; f < selectedLetters.length; f++) {
            if (selectedLetters[f] === userGuess) {
                foundLetter = true;
            };
        };

        //User already tried to use that letter
        if (foundLetter) {
            pickInd = "DUPLICATE";
        }
        //Else add the user's guess to the list of used letters
        else {
            selectedLetters[f] = userGuess;
        };

        //Stop the user from entering anything other than 1 character
        if (userGuess.length > 1) {
            
            console.log("\n\nOnly enter one character!\n".cyan);
        }
        //Only allow letters to be entered
        else if (userGuess < "A" || userGuess > "Z") {
            console.log("\n\nPlease enter a letter!\n".cyan);
        }
        //Correct guess was made
        else if (pickInd === "Y") {
            console.log("\n\nCORRECT!\n".green);
        }
        //Incorrect guess
        else if (pickInd === "N") { 
            console.log("\n\nINCORRECT!\n".red);
            //returnArray[0] holds the remaining guesses
            var remainingGuesses = returnArray[0];
            remainingGuesses--;
            returnArray[0] = remainingGuesses
            console.log("Remaining Guesses: " + remainingGuesses + "\n")
        }
        //Tell user they already enterd that letter
        else if (userGuess) {
            console.log("\n\nYou already entered that!\n".cyan);
        }
        
        returnArray[2] = selectedLetters;
        //return the array containing the 2 counters and the used letters array
        return returnArray;
    }
};

module.exports = Word;