/*Write a function that takes as input an array of integers A, and two integers low and high. 

Your function has to output pairs of indices: {(i,j), ...} 

Where each pair of indices denotes that the subarray of A[i...j] has a sum in the range low <= sum <= high. 
*/

var values = [3,1,5,3,5,63,54];
var low = 4;
var high = 69;

function getSums(values, low, high){
  var i, j;
  var sum = 0;
  
  for(var index = 0; index < values.length; index++){
    var value = values[index];
    sum += value;
    if((i && j) && sum < high+1 && sum > low -1){
      console.log("i:", i, "j:", j, "sum:", sum);
    }
    else if(i !== undefined & j){
      i = index;
      j = false;
      sum = value;    	
    }
    else if( i === undefined){
      i = index;
      sum = value;
    }
    else if( !j ){
      j = index;
      if(sum < high+1 && sum > low-1){
      	 console.log("i:", i, "j:", j, "sum:", sum);
      }
    }  
  }
};

getSums(values, low, high);
