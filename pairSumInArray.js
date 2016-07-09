//Find pairs in an integer array whose sum is equal to 10 (bonus: do it in linear time)

var Array = [1,2,3,5,6,7,8];

var pairs = {};
_.forEach(Array, function(number){
	if(number <10 && number >-1){
      	var needed = 10-number;
        if(pairs[number]){
        	console.log("a pair is", needed, " and ", number);
        }
        else{
        	pairs[needed] = number;
        }
      }
  });
