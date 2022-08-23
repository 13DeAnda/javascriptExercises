// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first half of the digits
// is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function solution(n) {
  const length = n.toString().length;

  if (length % 2) {
    return false;
  }
  const firstHalf = n.toString().slice(0, length / 2);
  const secondHalf = n.toString().slice(length / 2, length);

  firstSum = 0;
  secondSum = 0;
  for (let index in firstHalf) {
    firstSum += parseInt(firstHalf[index]);
    secondSum += parseInt(secondHalf[index]);
  }
  return firstSum === secondSum;
}

console.log("1230 ==> true", solution(1230));
console.log("239017 ==> false", solution(239017));
console.log("10 ==> false", solution(10));
console.log("11 ==> true", solution(11));
