// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { gametime } from '../utils.js';
// import { gametime } from '../utils.js';








const test = QUnit.test;

test('should return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = gametime(10, 9);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


