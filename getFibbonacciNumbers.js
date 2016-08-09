/*How many Fibonacci numbers exists less than a given number n.Can you find a function in terms of n , to get the number of fibonacci number less than n. 
Example : n = 6 
Answer: 6 as (0, 1, 1, 2, 3, 5)*/

function getFibbonacci(limit){
  var sequence = [0,1];
  index = 1;
  
  while(index < limit-1){
    pastValue = sequence[index];
    pastSecondValue = sequence[index-1];
    newValue = pastValue + pastSecondValue;
    sequence.push(newValue);
    index++;
  }
  console.log(sequence); 
};

getFibbonacci(6);
