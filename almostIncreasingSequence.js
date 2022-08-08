// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
// Sequence containing only one element is also considered to be strictly increasing.
// Example

// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. 
// Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
// Sequence containing only one element is also considered to be strictly increasing.
// Example

// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. 
// Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

function solution(sequence) {
    var count = 0;
    
    for(var i = 0; i < sequence.length; i++) {
        const past = sequence[i-1];
        const next = sequence[i+1];
        const current = sequence[i]
        if(current <= past) {
            count++;
            
            if(current <= sequence[i-2] && next <= past) {
                return false;
            } 
        }
    }
    
    return count <= 1;
}


console.log("[1, 3, 2, 1] => false", solution([1, 3, 2, 1]));
console.log("[1, 3, 2]] => true", solution([1, 3, 2]));
console.log("[1, 2, 1, 2] => false", solution([1, 2, 1, 2]));
// console.log("[10, 1, 2, 3, 4, 5] => true", solution([10, 1, 2, 3, 4, 5]));
console.log("[1, 2, 5, 3, 5] => true", solution([1, 2, 5, 3, 5]));