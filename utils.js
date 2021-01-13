import { remainingGuesses } from './app.js';

const replyBox = document.getElementById('reply-box');

let remainingGuessesEl = document.getElementById('remaining-guesses');


export function gametime(hiddenNumber, guessInput) {
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
}










//     if (hiddenNumber > guessInput.value) {
//     replyBox.textContent = 'Higher';
//     remainingGuessesEl.textContent = remainingGuesses;
// } else if (hiddenNumber < guessInput.value) {
//     replyBox.textContent = 'Lower';
//     remainingGuessesEl.textContent = remainingGuesses;
// } else if (hiddenNumber == guessInput.value) {
//     replyBox.textContent = 'Correct';
//     replyBox.style.fontSize = '2rem';
// }