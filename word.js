var Letter = require("./Letter")
var colors = require("colors")

var letterArray = [];
var indivLetter = "";
var letterObject = "";
var displayString = "";
function Word(){

    this.populateWord = function(computerPick, letterArray) {
        for (var i=0; i < computerPick.length; i++) {
            indivLetter = computerPick.charAt(i);
            if (indivLetter === " ") {
                letterObject = { [indivLetter] : true };
            }
            else {
                letterObject = { [indivLetter] : false };
            }
            letterArray[i] = letterObject;
        }
        return letterArray;
    },

    this.displayWord = function(letterArray) {
        displayString = "";
        for (var i=0; i < letterArray.length; i++) {
            var underlyingCharacter = Object.keys(letterArray[i]);
            var letterGuessedInd = letterArray[i][underlyingCharacter];
            var letter = new Letter(underlyingCharacter, letterGuessedInd);
            var displayValue = letter.whatToDisplay(underlyingCharacter, letterGuessedInd)
            letter.whatToDisplay(underlyingCharacter, letterGuessedInd);
            displayString += displayValue + " ";
        }
        console.log(displayString);
    },

    this.evaluateUserGuess = function(letterArray, userGuess) {
        var pickInd = "N";
        for (var i=0; i < letterArray.length; i++) {
            var underlyingCharacter = Object.keys(letterArray[i]);
            var letterGuessedInd = letterArray[i][underlyingCharacter];
            if (userGuess == underlyingCharacter){
                if (!letterGuessedInd){
                    pickInd = "Y";
                }
                else {
                    pickInd = "DUPLICATE"
                }
            }
            var letter = new Letter(underlyingCharacter, letterGuessedInd);
            letterArray[i][underlyingCharacter] = letter.checkCharacter(userGuess);
            var correctPick = false;
        }
        if (pickInd === "Y") {
            console.log("CORRECT!".green);
        }
        else if (pickInd === "N") { 
            console.log("INCORRECT!".red);
        }
        else {
            console.log("You already picked that letter!".cyan);
        }
    }
};

module.exports = Word;