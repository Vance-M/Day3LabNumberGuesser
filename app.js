// import functions and grab DOM elements
const compGuess = document.getElementById('comp-guess');
const resetButton = document.getElementById('reset');
const guessInput = document.getElementById('guess-input');
const replyBox = document.getElementById('reply-box');
let remainingGuessesEl = document.getElementById('remaining-guesses');
// initialize state

let hiddenNumber = Math.ceil(Math.random() * 20);

let remainingGuesses = 4;


// set event listeners to update state and DOM



compGuess.addEventListener('click', () => {

    remainingGuesses--;

    console.log(remainingGuesses);

    console.log(hiddenNumber);

    if (hiddenNumber > guessInput.value) {
        replyBox.textContent = 'Higher';
        remainingGuessesEl.textContent = remainingGuesses;
    } else if (hiddenNumber < guessInput.value) {
        replyBox.textContent = 'Lower';
        remainingGuessesEl.textContent = remainingGuesses;
    } else if (hiddenNumber == guessInput.value) {
        replyBox.textContent = 'Correct';
        replyBox.style.fontSize = '2rem';
    }



});

resetButton.addEventListener('click', () => {
    hiddenNumber = Math.ceil(Math.random() * 20);
    remainingGuesses = 4;
    remainingGuessesEl.textContent = remainingGuesses;
    replyBox.textContent = '';
});