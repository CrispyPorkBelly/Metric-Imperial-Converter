/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);

      var toString;
      //if initial inputs were invalid, do not return full string with conversions. just return Invalid input and/or units
      if( (initNum === 'Invalid Input') && !(initUnit === 'Invalid Unit') ) {
        toString = 'Invalid Input';
      } else if ( !(initNum === 'Invalid Input') && initUnit === 'Invalid Unit') {
        toString = 'Invalid Unit';
      } else if ( (initNum === 'Invalid Input') && (initUnit === 'Invalid Unit') ) {
        toString = 'Invalid Input and Invalid Unit';
      } else {
        toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      }
      let jsonResponse = {};

      jsonResponse.initNum = initNum;
      jsonResponse.initUnit = initUnit;
      
      //only add returnNum if initial input was valid
      console.log(initNum !== 'Invalid Input');
      if(returnNum !== 'Invalid Unit' && returnNum !== 'Invalid Input') {
        jsonResponse.returnNum = returnNum;
      }

      console.log(initUnit !== 'Invalid Unit');
      //only add returnUnit if initial unit was valid
      if(initUnit !== 'Invalid Unit') {
        jsonResponse.returnUnit = returnUnit;
      }

      jsonResponse.string = toString;
      res.json(jsonResponse);
    });
    
};
