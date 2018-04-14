// Roman Numerals
// Create a function romanNumerals(arg) that will either take in a string containing a roman numeral, or an integer. Given a string, the function should return the integer value of that roman numeral. Given an integer, the function should return the equivalent roman numeral.
// Roman Numeral Symbols to Values:
// I  ➞  1  
// V  ➞  5  
// X  ➞  10  
// L  ➞  50  
// C  ➞  100  
// D  ➞  500
// M  ➞  1000  
// Examples:
// "V" ➞ 5
// "IV" ➞ 4
// "CII" ➞ 102
// 45 ➞ "XLV"
// 1666 ➞ "MDCLXVI"

var romanNumbers = [
  {roman: "C", number: 1000},
  {roman: "D", number: 500},
  {roman: "C", number: 100},
  {roman: "L", number: 50},
  {roman: "X", number: 10},
  {roman: "V", number: 5},
  {roman: "I", number: 1}
];

function romanNumerals(arg) {
  if(parseInt(arg) === NaN){
  	return romanToNumber(arg);
  }
  else{
  	return numberToRoman(arg);
  }
}

function romanToNumber(arg){
	arg = parseInt(arg);
	console.log("the arg", arg);
}

function numberToRoman(arg){
  var finalConvertedNumber = "";
  var numberToConvert = parseInt(arg);
	
  for(var i = 0; i < romanNumbers.length; i++){
    var numberObject = romanNumbers[i];
    console.log("the numberObject", numberObject);
    if(numberToConvert % numberObject.number){
      var residual = (numberToConvert % numberObject.number);
      var timesToRepeat = (numberToConvert - residual) / numberObject.number;
      
      // for(var j = 0; j < timesToRepeat; j++){
      //   finalConvertedNumber += romanNumbers.roman;
      //   console.log("the finalConvertedNumber", finalConvertedNumber);
      // }
    }
  }
}

romanNumerals("1666");







