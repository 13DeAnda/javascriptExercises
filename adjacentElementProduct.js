// Given an array of integers, find the pair of adjacent elements that 
//has the largest product and return that product.
//Example:
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

//asumes there is at least 2 elements
function solution(inputArray) {
    let firstChoosen = inputArray[0];
    let secondChoosen = inputArray[1];

    for(let index in inputArray){
        let first = inputArray[index];
        let second = inputArray[++index];

       if(second && (first*second ) > secondChoosen * firstChoosen){
          firstChoosen = first;
          secondChoosen = second;
       }
    }
    return firstChoosen * secondChoosen;
}

console.log("[3, 6, -2, -5, 7, 3] -> 21", solution([3, 6, -2, -5, 7, 3]));
console.log("[-1, -2] -> 2", solution([-1, -2]));
console.log("[5, 1, 2, 3, 1, 4] -> 6", solution([5, 1, 2, 3, 1, 4]));


