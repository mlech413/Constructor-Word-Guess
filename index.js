var Word = require("./Word");
var inquirer = require("inquirer");
var colors = require("colors");

listOfMovies = [
    'A Clockwork Orange',
    'A Streetcar Named Desire',
    'Aliens',
    'All Quiet on the Western Front',
    'Amadeus',
    'American Beauty',
    'Annie Hall',
    'Apocalypse Now',
    'Back to the Future',
    'Beauty and the Beast',
    'Blade Runner',
    'Braveheart',
    'Bringing Up Baby',
    'Butch Cassidy and the Sundance Kid',
    'Casablanca',
    'Casino',
    'Chinatown',
    'Cinema Paradiso',
    'Citizen Kane',
    'Come and See',
    'Cool Hand Luke',
    'Die Hard',
    'Django Unchained',
    'Do the Right Thing',
    'Eternal Sunshine of the Spotless Mind',
    'Fargo',
    'Fight Club',
    'Finding Nemo',
    'Forrest Gump',
    'Full Metal Jacket',
    'Gladiator',
    'Gone with the Wind',
    'Good Will Hunting',
    'Goodfellas',
    'Groundhog Day',
    'Heat',
    'How to Train Your Dragon',
    'Inception',
    'Inside Out',
    'Jaws',
    'Jurassic Park',
    'Lawrence of Arabia',
    'Memento',
    'Monty Python and the Holy Grail',
    'Network',
    'Night of the Living Dead',
    'No Country for Old Men',
    'North by Northwest',
    'On the Waterfront',
    'Pretty Woman',
    'Psycho',
    'Pulp Fiction',
    'Raging Bull',
    'Raiders of the Lost Ark',
    'Ratatouille',
    'Rear Window',
    'Reservoir Dogs',
    'Return of the Jedi',
    'Rocky',
    'Saving Private Ryan',
    'Scream',
    'Seven Samurai',
    'Slumdog Millionaire',
    'Solaris',
    'Some Like It Hot',
    'Star Wars',
    'Strangers on a Train',
    'Sunrise',
    'Taxi Driver',
    'The Best Years of Our Lives',
    'The Bridge on the River Kwai',
    'The Dark Knight',
    'The Deer Hunter',
    'The Departed',
    'The Empire Strikes Back',
    'The French Connection',
    'The Godfather',
    'The Graduate',
    'The Grapes of Wrath',
    'The Great Escape',
    'The Hustler',
    'The Lion King',
    'The Lord of the Rings',
    'The Maltese Falcon',
    'The Manchurian Candidate',
    'The Matrix',
    'The Night of the Hunter',
    'The Philadelphia Story',
    'The Pianist',
    'The Princess Bride',
    'The Shawshank Redemption',
    'The Shining',
    'The Silence of the Lambs',
    'The Sixth Sense',
    'The Social Network',
    'The Sting',
    'The Terminator',
    'The Usual Suspects',
    'The Wizard of Oz',
    'There Will Be Blood',
    'This Is Spinal Tap',
    'Titanic',
    'To Kill a Mockingbird',
    'Toy Story',
    'Trainspotting',
    'Unforgiven',
    'Up',
    'Vertigo',
    'Young Frankenstein'
];

var letterArray = [
];

var wins = 0;
var losses = 0;
var selectedLetters = [ "" ];

function main() {
    //returnArray[0] holds the remaining guesses count, so if 0, player losses
    if (returnArray[0] <= 0) {
        losses++;
        console.log("The answer was " + computerPick.yellow)
        console.log("\n****************************".red)
        console.log  ("***                      ***".red)
        console.log  ("***  Sorry, you lose!!!  ***".red)
        console.log  ("***                      ***".red)
        console.log  ("****************************\n".red)
        finalDisplay();
     }
    else if (returnArray[1] >= computerWordLength) {
        wins++;
        console.log("\n*************************************".green)
        console.log  ("***                               ***".green)
        console.log  ("***  Congratulations, you win!!!  ***".green)
        console.log  ("***                               ***".green)
        console.log  ("*************************************\n".green)
        finalDisplay();
    }

    //Prompt user for a letter
    inquirer.prompt([
        {
        type: "input",
        name: "letter",
        message: "Guess a letter"
        }
    ]).then(function(user) {
        //Make everything uppercase for comparison
        var userGuess = user.letter.toUpperCase();
        //Exit the program if user types 'exit'
        if (userGuess === "EXIT") {
            console.log("\nTHANKS FOR PLAYING! ".yellow)
        }
        
        else {
            //Call a function to evaluate user's guess.
            //Calls with the array of the display on the screen, the user's guess, and an array with counters and used letters.
            //Return same array, but with updated counters and used letters.
            returnArray = word.evaluateUserGuess(letterArray, userGuess, returnArray);

            word.displayWord(letterArray);
            main();
        }
    });
};

//Display stuff after user wins or losses
function finalDisplay() {
    console.log ("Wins: " + wins + "  Losses: " + losses + "\n");
    console.log("Let's play again!".cyan);
    console.log("(Type 'Exit' to end the program)\n".blue);
    letterArray = [];
    //Pick a new random word from the array
    computerPick = listOfMovies[Math.floor(Math.random() * listOfMovies.length)].toUpperCase();
    //Word constructor function
    word = new Word();
    //Populate the movie in Word array, which creates an object in the array for each letter
    word.populateWord(computerPick, letterArray);
    //Strip spaces to find out how many letters are in the computer word
    computerWordNoSpaces = computerPick.replace(/ /g,'');
    computerWordLength = computerWordNoSpaces.length;
    //Display the word, using '_' for unguessed letters
    word.displayWord(letterArray);
    //Reset the list of letters that have been selected, but keep '' in the array (to be able to ignore later if the user just hits enter)
    selectedLetters = [ "" ];
    //reset array with counters and list of letters that was selected
    returnArray = [10, 0, selectedLetters ];
};

//Run the program
console.log("\nConstructor functions: GUESS THE FAMOUS MOVIE!!!".yellow)
console.log("(Type 'Exit' to end the program)\n".blue)
//Pick a random movie from the array
var computerPick = listOfMovies[Math.floor(Math.random() * listOfMovies.length)].toUpperCase();
//Word constructor function
var word = new Word();
//Populate the movie in Word array, which creates an object in the array for each letter
word.populateWord(computerPick, letterArray);
//Create vars with striped spaces to find out how many letters are in the computer word
var computerWordNoSpaces = computerPick.replace(/ /g,'');
var computerWordLength = computerWordNoSpaces.length;
//Display the word, using '_' for unguessed letters
word.displayWord(letterArray);
//create  array with counters and list of letters that was selected
var returnArray = [10, 0, selectedLetters];
//Call the main function again to continue to loop
main();