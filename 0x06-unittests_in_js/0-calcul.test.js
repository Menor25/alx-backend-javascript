const assert = require('assert');
const calculateNumber = require('./0-calcul');

//Describe the test suit
describe('calculateNumber:', function() {
    //Describe the test case
    describe('Calculate to integers:', function() {
        //Write the test case
        it('should return 4 when 1 is added to 3', function() {
            assert.strictEqual(calculateNumber(1, 3), 4);
        });
    });

    //Describe the test case
    describe('Calculate integer and float:', function(){
        //Write the test case
        it('should return 4 when 1 is add to 2.8:', function(){
            assert.strictEqual(calculateNumber(1, 2.8), 4);
        });
    });

    //Describe the test suite
    describe('Calculate two float:', function() {
        //Write the test case
        it('should return 6 when 2.6 is added to 2.8:', function(){
            assert.strictEqual(calculateNumber(2.6, 2.8), 6);
        });
    });

    //Describe the test case
    describe('Calculate two floats that are round down:', function() {
        //Write the test case
        it('should return 5 when 2.4 is added tp 3.3', function() {
            assert.strictEqual(calculateNumber(2.4, 3.3), 5);
        });
    });
});