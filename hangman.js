
const words = ['hangman', 'javascript', 'developer', 'programming', 'webpage', 'html', 'css'];
const selectedWord = words[Math.floor(Math.random() * words.length)];
let wordDisplay = Array(selectedWord.length).fill('_');
let guessedLetters = [];
const maxIncorrectGuesses = 6;
let incorrectGuesses = 0;
function updateWordDisplay() {
    document.getElementById('word-display').innerText = wordDisplay.join(' ');
}
function updateLettersGuessed() {
    document.getElementById('letters-guessed').innerText = 'Letters Guessed: ' + guessedLetters.join(', ');
}
function checkGuess(letter) {
    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                wordDisplay[i] = letter;
            }
        }
        updateWordDisplay();
        if (!wordDisplay.includes('_')) {
            displayMessage('Congratulations! You guessed the word!');
            displayGif("hangman_images/victory.gif");
        }
    } else {
        incorrectGuesses++;
        guessedLetters.push(letter);
        
        updateLettersGuessed();
        updateHangmanImage();  // updates the hanged man image
        if (incorrectGuesses === maxIncorrectGuesses) {
            displayMessage('Game over. The word was: ' + selectedWord);
            displayGif("hangman_images/lost.gif");
        }
    }
}
function updateHangmanImage() {
    if (incorrectGuesses == 1){
        document.getElementById("hmImg").src = 'hangman_images/hangman-1.svg';
    } else if (incorrectGuesses == 2) {
        document.getElementById("hmImg").src = 'hangman_images/hangman-2.svg';
    } else if (incorrectGuesses == 3) {
        document.getElementById("hmImg").src = 'hangman_images/hangman-3.svg';
    } else if (incorrectGuesses == 4) {
        document.getElementById("hmImg").src = 'hangman_images/hangman-4.svg';
    } else if (incorrectGuesses == 5) {
        document.getElementById("hmImg").src = 'hangman_images/hangman-5.svg';
    } else if (incorrectGuesses == 6) {
        document.getElementById("hmImg").src = 'hangman_images/hangman-6.svg';
    }
}
function displayMessage(message) {
    document.getElementById('message').innerText = message;
}
function displayGif(gif) {
    document.getElementById('gif').src = gif;
}
// Event listener for key presses
document.addEventListener('keypress', function (event) {
    // Decide if the game will continue
    if (incorrectGuesses === maxIncorrectGuesses || !wordDisplay.includes('_')) {
    return;
    }
    // Check if the pressed key is a letter
    if (/^[a-zA-Z]$/.test(event.key)) {
        const guessedLetter = event.key.toLowerCase();
        // Check if the letter has already been guessed
        if (!guessedLetters.includes(guessedLetter)) {
            checkGuess(guessedLetter);
        }
    }
});
// Initialize the game
updateLettersGuessed();
updateWordDisplay();
displayMessage('');