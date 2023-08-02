'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
	.get(function(req,res,next) {
		let inputNum = req.query.input;
		let parsedNum = convertHandler.getNum(inputNum);
		let parsedUnit = convertHandler.getUnit(inputNum);
		
		if (parsedNum == 0 && parsedUnit == 0) {
			res.send('invalid number and unit');
		} else if (parsedNum == 0) {
			res.send('invalid number');
		} else if (parsedUnit == 0) {
			res.send('invalid unit');
		} else {
			let outputNum = convertHandler.convert(parsedNum, parsedUnit);
			let outputUnit = convertHandler.getReturnUnit(parsedUnit);
			let spellInputUnit = convertHandler.spellOutUnit(parsedUnit);
			let spellUnit = convertHandler.spellOutUnit(outputUnit);
			let outputString = convertHandler.getString(parsedNum, spellInputUnit, outputNum, spellUnit);
						
			let outputJson = {
				initNum: parsedNum,
				initUnit: parsedUnit,
				returnNum: parseFloat(outputNum),
				returnUnit: outputUnit,
				string: outputString
		}
						
				res.send(outputJson);
		}

	});
};
