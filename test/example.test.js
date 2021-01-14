// IMPORT MODULES under test here:
// import { example } from '../example.js';

// import { gametime } from '../utils.js';

function gametime(hiddenNumber, guessInput) {
    if (hiddenNumber > guessInput.value) {

        return 1;
    } else if (hiddenNumber < guessInput.value) {

        return -1;
    } else if (Number.hiddenNumber === Number.guessInput) {

        return 0;
    }
}





const test = QUnit.test;

test('should return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = gametime(7, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


