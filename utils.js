
export function gametime(hiddenNumber, guessInput) {
    if (hiddenNumber > guessInput) {
        return 1;
    } else if (hiddenNumber === guessInput) {
        return 0;
    }
    else if (hiddenNumber < guessInput) {
        return -1;
    }
}







