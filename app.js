import { gametime } from './utils.js';

// import functions and grab DOM elements
const compGuess = document.getElementById('comp-guess');
const resetButton = document.getElementById('reset');
const guessInput = document.getElementById('guess-input');
const replyBox = document.getElementById('reply-box');
let remainingGuessesEl = document.getElementById('remaining-guesses');


// initialize state

let hiddenNumber = Math.ceil(Math.random() * 20);

let remainingGuesses = 4;

export { remainingGuesses };


// set event listeners to update state and DOM



compGuess.addEventListener('click', () => {
    remainingGuesses--;
    const results = gametime(hiddenNumber, Number(guessInput.value));
    if (results === 1) {
        replyBox.textContent = 'Higher';
        remainingGuessesEl.textContent = remainingGuesses;
    } else if (results === -1) {
        replyBox.textContent = 'Lower';
        remainingGuessesEl.textContent = remainingGuesses;
    } else if (results === 0) {
        replyBox.textContent = 'Correct';
        remainingGuessesEl.textContent = remainingGuesses;
    }


});

resetButton.addEventListener('click', () => {
    hiddenNumber = Math.ceil(Math.random() * 20);
    remainingGuesses = 4;
    remainingGuessesEl.textContent = remainingGuesses;
    replyBox.textContent = '';
});