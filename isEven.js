//Create a function that takes a number as an argument and returns "even" for even 
//numbers and "odd" for odd numbers.
//Input will always be whole numbers (don't worry about decimals).
//Negative whole numbers are fine.

function isEvenOrOdd(num) {
  if(num%2){
  	return "odd";
  }
  else{
  	return "even";
  }
}

isEvenOrOdd(7);