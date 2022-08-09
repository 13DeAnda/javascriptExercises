// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].


function solution(inputArray){
    let longestLength = 0;
    let map = {}

    for (let str of inputArray){

        const length = str.length;
        if(length > longestLength){
            longestLength = length;
        }
            
        if(!map[length]){
            map[length] = [];
        }
        map[length].push(str);
    }
    return map[longestLength];
}

console.log(`["aba", "aa", "ad", "vcd", "aba"]----> ["aba", "vcd", "aba"]`, solution(["aba", "aa", "ad", "vcd", "aba"]));