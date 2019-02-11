/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    /* SPLIT THE NUMBER FROM THE UNIT */
    //trim off leading and trailing zeroes
    result = input.trim();
    //determine index of where non-numeric input starts
    let indexWhereUnitBegins = result.search('[a-zA-Z]');
    //disgard all characters that come BEFORE that index
    result = result.substring(0,indexWhereUnitBegins);
    //handle fractions
      //determine if there is a divide
      if(result.includes('/')) {
        const indexOfDivideOperator = result.indexOf('/');
        //identify what the numerator is
        const numerator = result.substring(0,indexOfDivideOperator);
        //identify what the denominator is
        const denominator = result.substring(indexOfDivideOperator + 1);
        //divide the two numbers
        result = numerator/denominator;
      }
    
    result = parseFloat(result);
    //handle inputs that are not real number inputs such as 1//2
    if(isNaN(result)) {
      result = 'Invalid Input';
    }

    //default to a unit of 1 if no number is provided
    if(indexWhereUnitBegins === 0) {
      result = '1';
    }

    //console.log('result: ',result);
    //return result
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    /* SPLIT THE NUMBER FROM THE UNIT */
    //trim off leading and trailing zeroes
    result = input.trim();
    //determine index of where non-numeric input starts
    let indexWhereUnitBegins = result.search('[a-zA-Z]');
    //disgard all characters that come AFTER that index
    result = result.substring(indexWhereUnitBegins);

    //test for correct units
    const regex = RegExp('^gal$|^l$|^mi$|^km$|^lbs$|^kg$', 'gmi');
    const isCorrectUnitEntered = regex.test(result);

    if(!isCorrectUnitEntered) {
      result = 'Invalid Unit';
    }

    console.log(result);
    //return result
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;

    switch(initUnit) {
      case 'gal':
      result = 'l';
      break;
      case 'l':
      result = 'gal';
      break;
      case 'mi':
      result = 'km';
      break;
      case 'km':
      result = 'mi';
      break;
      case 'lbs':
      result = 'kg';
      break;
      case 'kg':
      result = 'lbs';
      break;
      default:
      result = 'Invalid Unit';
    }
    
    //console.log(result);
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit) {
      case 'gal':
      result = 'gallons';
      break;
      case 'l':
      result = 'litres';
      break;
      case 'mi':
      result = 'miles';
      break;
      case 'km':
      result = 'kilometers';
      break;
      case 'lbs':
      result = 'pounds';
      break;
      case 'kg':
      result = 'kilograms';
      break;
      default:
      result = 'Invalid Unit';
    }
    
    //console.log(result);
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const initUnitVar = initUnit.toLowerCase();

    var result;

    if(initUnitVar === 'gal') {
      result = initNum * galToL;
    } else if (initUnitVar === 'l') {
      result = initNum / galToL;
    } else if (initUnitVar === 'lbs') {
      result = initNum * lbsToKg;
    } else if (initUnitVar === 'kg') {
      result = initNum / lbsToKg;
    } else if (initUnitVar === 'mi') {
      result = initNum * miToKm;
    } else if (initUnitVar === 'km') {
      result = initNum / miToKm;
    }
    
    console.log(result);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
