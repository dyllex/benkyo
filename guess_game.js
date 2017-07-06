//create secret number
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number.")
var guess = Number(stringGuess);

    //check guess
    if (guess === secretNumber) {
        alert ("You got it!!");
    }

    else if (guess < secretNumber) {
        prompt ("Too low! Try again?");
    }

    else {
        prompt ("Too high! Try again?");
    }