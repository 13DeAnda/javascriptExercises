//Write a function that takes an array of numbers and returns the greatest difference you can get by subtracting any two of those numbers.

function getMaxDiff(numbers){ 
  var min, max;
  
  numbers.forEach(function(number){
    if(!min || min > number ){
        min = number
     }
     else if((!max || max < number) && number !== min){
        max = number;
     }
  });
  var difference = max-min;

  return difference;

}


console.log(getMaxDiff([4,64,45,34,12,9, 45, 67, 94])) // 94-4 = 90


