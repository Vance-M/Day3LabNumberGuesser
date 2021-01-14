

const replyBox = document.getElementById('reply-box');

let remainingGuessesEl = document.getElementById('remaining-guesses');


export function gametime(hiddenNumber, guessInput) {
    if (hiddenNumber > guessInput) {
        return 1;
    } else if (hiddenNumber === guessInput) {
        console.log('theyre the same')
        return 0;
    }
    else if (hiddenNumber < guessInput) {
        return -1;
    }
}







