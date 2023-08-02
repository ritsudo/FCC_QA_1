const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
	
	test('read whole number', function(){
		assert.equal(convertHandler.getNum("2kg"), 2);
	});
	test('read decimal number', function(){
		assert.equal(convertHandler.getNum("2.5kg"), 2.5);
	});
	test('read fractional number', function(){
		assert.equal(convertHandler.getNum("5/2kg"), 2.5);
	});
	test('read fractional decimal number', function(){
		assert.equal(convertHandler.getNum("3.5/5kg"), 0.7);
	});
	test('double fraction error', function(){
		assert.equal(convertHandler.getNum("3/5/5kg"), 0);
	});
	test('no numerical input provided', function(){
		assert.equal(convertHandler.getNum("kg"), 1);
	});
	
	test('should read each valid input unit', function(){
		assert.equal(convertHandler.getUnit("gal"), "gal");
		assert.equal(convertHandler.getUnit("L"), "L");
		assert.equal(convertHandler.getUnit("mi"), "mi");
		assert.equal(convertHandler.getUnit("km"), "km");
		assert.equal(convertHandler.getUnit("lbs"), "lbs");
		assert.equal(convertHandler.getUnit("kg"), "kg");
	});
	
	test('should error invalid input unit', function(){
		assert.equal(convertHandler.getUnit("min"), 0);
	})
	
	test('return unit from valid input unit', function(){
		assert.equal(convertHandler.getReturnUnit("gal"), "L");
		assert.equal(convertHandler.getReturnUnit("L"), "gal");
		assert.equal(convertHandler.getReturnUnit("mi"), "km");
		assert.equal(convertHandler.getReturnUnit("km"), "mi");
		assert.equal(convertHandler.getReturnUnit("lbs"), "kg");
		assert.equal(convertHandler.getReturnUnit("kg"), "lbs");
	});
	
	test('return unit from valid input unit', function(){
		assert.equal(convertHandler.spellOutUnit("gal"), "gallons");
		assert.equal(convertHandler.spellOutUnit("L"), "liters");
		assert.equal(convertHandler.spellOutUnit("mi"), "miles");
		assert.equal(convertHandler.spellOutUnit("km"), "kilometers");
		assert.equal(convertHandler.spellOutUnit("lbs"), "pounds");
		assert.equal(convertHandler.spellOutUnit("kg"), "kilograms");
	});
	
	test('convert gal to L', function() {
		assert.equal(convertHandler.convert(1, "gal"), 3.78541);
	});
	
	test('convert L to gal', function() {
		assert.equal(convertHandler.convert(1, "L"), 0.26417);
	});
	
	test('convert mi to km', function() {
		assert.equal(convertHandler.convert(1, "mi"), 1.60934);
	});
	
	test('convert km to mi', function() {
		assert.equal(convertHandler.convert(1, "km"), 0.62137);
	});
	
	test('convert lbs to kg', function() {
		assert.equal(convertHandler.convert(1, "lbs"), 0.45359);
	});
	
	test('convert kg to lbs', function() {
		assert.equal(convertHandler.convert(1, "kg"), 2.20462);
	});
	
});