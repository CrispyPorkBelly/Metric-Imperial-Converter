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
      result = 'Invalid Input'
    }

    console.log('result: ',result);
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
    //return result
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
