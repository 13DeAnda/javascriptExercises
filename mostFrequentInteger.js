//Find the most frequent integer in an array.

var numbers = [23,45,45,23,4,4,4,455,65, 65,3,23,87,65,87,67,09,56, 23,34];
var numberMap = {};
var mostComonCount;
var mostCommonNumber;

_.forEach(numbers, function(number){
	  numberMap[number] = numberMap[number]? ++numberMap[number] : 1;
    if(!mostComonCount || mostComonCount < numberMap[number]){
  		  mostComonCount = numberMap[number];
        mostCommonNumber = number;
    }
});
