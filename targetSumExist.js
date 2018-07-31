
// checks whether an array of  two numbers could add up to a x sum
// numbers can be repeated,
function targetSumExistsInTwoNumbers(numbers, sum){
  var currentSum = numbers[0] + numbers[1];
  var oneCanAdd = Math.floor((sum - currentSum) / numbers[0]);
  var twoCanAdd = Math.floor((sum - currentSum) / numbers[1]);

  do{
    if(currentSum === sum ){
      return true;
    }
    else if(currentSum > sum){
      return false;
    }
    else{
      var tempSum1 = currentSum + oneCanAdd * numbers[0];
      currentSum =  tempSum1 <= sum ? tempSum1 : currentSum;
      oneCanAdd = oneCanAdd === 0? 0 : oneCanAdd -1;

      var tempSum2 = currentSum + twoCanAdd * numbers[1];
      currentSum = tempSum2 <= sum ? tempSum2 : currentSum;
      twoCanAdd = twoCanAdd === 0 ? 0 : twoCanAdd -1;

      if(tempSum1 > sum && tempSum2 > sum){
        return false;
      }
    }

  }while(oneCanAdd || twoCanAdd);

  return currentSum === sum;
}

console.log("true", targetSumExistsInTwoNumbers([10, 20], 30)); // true
console.log("false",targetSumExistsInTwoNumbers([10, 20], 35)); // false
console.log("true", targetSumExistsInTwoNumbers([10, 20], 40)); // true
console.log("true", targetSumExistsInTwoNumbers([10, 20], 70)); // true
console.log("true", targetSumExistsInTwoNumbers([12, 20], 56)); // true