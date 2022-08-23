// Given two strings, find the number of common characters between them.

function solution(s1, s2) {
  let map = {};
  let counter = 0;
  for (let char of s1) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  for (let char of s2) {
    if (map[char]) {
      counter++;
      map[char]--;
    }
  }
  console.log(map);
  return counter;
}

console.log("aabcc, adcaa ==> 3", solution("aabcc", "adcaa"));
