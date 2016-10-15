//Write a function that takes an array of numbers and returns the greatest difference you can get by subtracting any two of those numbers.
var numbers = [4,64,45,34,12,9, 45, 67, 94];

function getMaxDiff(){ 
  var min, max;
  
  _.forEach(numbers,function(number){
    if(!min || min > number ){
        min = number
     }
     if((!max || max < number) && number !== min){
        max = number;
     }
  });
  var difference = max-min;
  if(isNaN(difference)){
    return -1
  }
  else{
    return difference;
  }
}

