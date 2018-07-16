var Word = require("./Word")
var inquirer = require("inquirer");

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
    'Bringing Up Baby',
    'Butch Cassidy and the Sundance Kid',
    'Casablanca',
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
    'Gone with the Wind',
    'Goodfellas',
    'Heat',
    'How to Train Your Dragon',
    'Inception',
    'Inside Out',
    'Jaws',
    'Lawrence of Arabia',
    'Life Is Beautiful',
    'Memento',
    'Monty Python and the Holy Grail',
    'Network',
    'Night of the Living Dead',
    'No Country for Old Men',
    'North by Northwest',
    'On the Waterfront',
    'Psycho',
    'Pulp Fiction',
    'Raging Bull',
    'Raiders of the Lost Ark',
    'Ratatouille',
    'Rear Window',
    'Reservoir Dogs',
    'Return of the Jedi',
    'Saving Private Ryan',
    'Seven Samurai',
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
    'The Kid',
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
    'The Social Network',
    'The Sting',
    'The Terminator',
    'The Usual Suspects',
    'The Wizard of Oz',
    'There Will Be Blood',
    'This Is Spinal Tap',
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

//pick a ranndom movie
var computerPick = listOfMovies[Math.floor(Math.random() * listOfMovies.length)].toUpperCase();
console.log("computerPick=" + computerPick)

var word = new Word();

 //populate movie in Word array
 word.populateWord(computerPick, letterArray);

 word.displayWord(letterArray);

function main() {

    inquirer.prompt([
        {
        type: "input",
        name: "letter",
        message: "Guess a letter"
        }
    ]).then(function(user) {
        var userGuess = user.letter.toUpperCase();
        word.evaluateUserGuess(letterArray, userGuess);
        word.displayWord(letterArray);

        if (userGuess) {
            main();
        };

    });

};

//run the program
main();