// Your solution goes here
function playGuessingGame(numToGuess, totalGuesses) {
  let numberOfGuesses = 0;
  let guessedNumber = 0;
  while (numberOfGuesses < totalGuesses) {
    guessedNumber = getTheNumberFromUser(
      numberOfGuesses,
      numToGuess,
      guessedNumber
    );
    console.log(guessedNumber);
    if (guessedNumber == numToGuess) {
      console.log(`You guessed the number Right it's ${guessedNumber}`);
      break;
    } else if (guessedNumber == null) {
      console.log(`you cancelled the game`);
      return 0;
    }
    numberOfGuesses = numberOfGuesses + 1;
  }
  if (guessedNumber != numToGuess) {
    console.log("You could not guess in the valid number of tries");
  }
}
function getTheNumberFromUser(numberOfGuesses, numberToGuess, guessedNumber) {
  return numberOfGuesses === 0
    ? prompt("Enter a number between 1 and 100.")
    : prompt(getGuessedNumberMessage(numberToGuess, guessedNumber));
}

function getGuessedNumberMessage(numberToGuess, guessedNumber) {
  if (!isNumber(numberToGuess)) {
    return "Please enter a number";
  } else if (numberToGuess > guessedNumber) {
    return guessedNumber + " is too small. Guess a larger number.";
  } else if (numberToGuess === guessedNumber) {
    return guessedNumber + " is the right number. You guess it right.";
  } else if (numberToGuess < guessedNumber) {
    return guessedNumber + " is too large. Guess a smaller number.";
  }
}

function isNumber(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}
