const assert = require('assert');
const calculateNumber = require('./1-calcul');

//Describe the test suite
describe("calculateNumber function:", function() {
    //describe the test case
    describe("Calculates addition of two float:", function() {
        //write the test case
        it('Returns 6.', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe("calculates subtraction of two float:", function() {
        it("Returns -4", function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe("calculates division of two float:", function() {
        it("Returns 0.2", function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });
    });

    describe("calculates division by zero:", function() {
        it("returns Error", function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});