var Letter = require("./Letter")


var underlyingCharacter = "";
// console.log("underlyingCharacter=" + underlyingCharacter);
var letterGuessedInd = false;
// console.log("letterGuessedInd=" + letterGuessedInd);



// console.log(letter);
var userGuess = "a";
console.log("userGuess=" + userGuess);
// letter.whatToDisplay(userGuess);
// letter.checkCharacter(userGuess);

var letterArray = [
];
console.log("start letterArray=" + JSON.stringify(letterArray));

// var computerPick = "cat";
var indivLetter = "";
var letterObject = "";
var displayString = "";
function Word(){
    this.populateWord = function(computerPick, letterArray) {
        for (var i=0; i < computerPick.length; i++) {
            // console.log("computerPick.charAt(i)=" + computerPick.charAt(i));
            indivLetter = computerPick.charAt(i);
            if (indivLetter === " ") {
                letterObject = { [indivLetter] : true };
            }
            else {
                letterObject = { [indivLetter] : false };
            }
            letterArray[i] = letterObject;
            console.log("populate letterArray[" + i + "]=" + JSON.stringify(letterArray[i]));
        }
        return letterArray;
    },
    this.displayWord = function(letterArray) {
        for (var i=0; i < letterArray.length; i++) {
            underlyingCharacter = letterArray[i];
            var underlyingCharacter = Object.keys(letterArray[i]);
            // var letterGuessedInd = Object(letterArray[i]);
            var letterGuessedInd = letterArray[i][underlyingCharacter];
            console.log("start-underlyingCharacter=" + underlyingCharacter);
            console.log(letterGuessedInd);
            var letter = new Letter(underlyingCharacter, letterGuessedInd, indivLetter);
            var displayValue = letter.whatToDisplay(underlyingCharacter, letterGuessedInd)
            letter.whatToDisplay(underlyingCharacter, letterGuessedInd);
            console.log("displayValue=" + displayValue);
            displayString += displayValue + " ";
        }
        console.log(displayString);
    }
    
};



module.exports = Word;