Write a function that finds the common elements in 2 int arrays

var array1 = [3,4,5,6];
	Var array2 = [4,6,4,7,5,90];
var repeatedNumbers = [];
	_.forEach(array1, function(number){
	if(array2.indexOf(number) > -1 && repeatedNumbers.indexOf(number) < 0){
		repeatedNumbers.push(number);
  }
);

console.log(“the repeated numbers are:”, repeatedNumbers);

