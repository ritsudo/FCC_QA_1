function ConvertHandler() {
  
  function getMiddlePoint(input) {
	let inputLength = input.length;
	let i = 0;
	let middlePoint = 0;
	const letterRegex = /[a-zA-Z]/;
	
	while (i < input.length) {
		let found = letterRegex.test(input[i]);
		if (found) {
			middlePoint = i;
			break; 
			};
		i += 1;
		middlePoint = i;
	}
	return middlePoint;
  }
  
  function countFractional(input) {
	  let result = eval(input)
	  return parseFloat(result);
  }
  
  this.getNum = function(input) {

	let middlePoint = getMiddlePoint(input);
	let numArray = input.slice(0, middlePoint);
	if (numArray.length == 0) {return 1;} //if nothing specified
	
	const dotRegex = /[.]/;
	const slashRegex = /\//;
	const onlyDigitsRegex = /^\d+$/;
	
	if (dotRegex.test(numArray)) {
		//if dot found
		if (slashRegex.test(numArray)) {
			// if dot & slash found
			
//			let newArray = numArray.split('.');
//			let fractResult = parseFloat(newArray[0]) + countFractional(newArray[1]);
//			return(parseFloat(fractResult));

			return(parseFloat(countFractional(numArray)));
		}
		return(parseFloat(numArray));
	} else if (slashRegex.test(numArray)) {
		//if only slash found
			let testArr = numArray.split('/');
			if (testArr.length <= 2) {
				return(countFractional(numArray));
			}
	} else {
		//if nothing found
		if (onlyDigitsRegex.test(numArray)) {
			return(parseFloat(numArray));
		}
	}
	
    return 0;
	
	// RETURN COUNTS: 1 - RETURN 1; 0 - INVALID NUMBER
	
  };
  
  this.getUnit = function(input) {
	let middlePoint = getMiddlePoint(input);
	let unitArray = input.slice(middlePoint, input.length);
	if (unitArray.length == 0) {return 0;}
	
	let result = 0;
	let testResult = unitArray.toLowerCase();
	
	var allowed = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
	for (let i = 0; i < allowed.length; i+=1) {
		if (testResult == allowed[i]) {
			result = testResult;
		}
	}
	
	if (result == 'l') {
		result = 'L'
	}
	    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = '';
	let inputUnit = initUnit.toLowerCase();
    
			switch (inputUnit) {
			case 'gal':
				result = 'L'
				break;
			case 'l':
				result = 'gal'
				break;
			case 'mi':
				result = 'km'
				break;
			case 'km':
				result = 'mi'
				break;
			case 'lbs':
				result = 'kg'
				break;
			case 'kg':
				result = 'lbs'
				break;
			default:
				break;
	}
	
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = '';
	let inputUnit = unit.toLowerCase();
    
			switch (inputUnit) {
			case 'gal':
				result = 'gallons'
				break;
			case 'l':
				result = 'liters'
				break;
			case 'mi':
				result = 'miles'
				break;
			case 'km':
				result = 'kilometers'
				break;
			case 'lbs':
				result = 'pounds'
				break;
			case 'kg':
				result = 'kilograms'
				break;
			default:
				break;
	}
	
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
	
	const lToGal = 0.264172;
	const kgToLbs = 2.204624;
	const kmToMi = 0.621373;
	
	var selectedConst = 0;
	
	switch (initUnit.toLowerCase()) {
		case 'gal':
			selectedConst = galToL;
			break;
		case 'l':
			selectedConst = lToGal;
			break;
		case 'mi':
			selectedConst = miToKm;
			break;
		case 'km':
			selectedConst = kmToMi;
			break;
		case 'lbs':
			selectedConst = lbsToKg;
			break;
		case 'kg':
			selectedConst = kgToLbs;
			break;
		default:
			break;
	}
	
	let calculus = initNum * selectedConst
	
    let result = calculus.toFixed(5);
		
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = (initNum + ' ' + initUnit + ' converts to ' + returnNum + ' ' + returnUnit);
	
    return result;
  };
  
}

module.exports = ConvertHandler;
