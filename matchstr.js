/*write code for this function matchstr() given
at least 1 char of pattern, and should not exeed the max of the pattern
*/
const matchstr = (string, pattern)=>{
  let patternIndex = 0;
  let mapPatterns = {}

  for(char of string){    
    if(char === pattern[patternIndex]){
      if(mapPatterns[char] < 1){
        return false
      }
      else if(mapPatterns[char]){
        mapPatterns[char] = --mapPatterns[char];
      }
      else {
        mapPatterns[char] = parseInt(pattern[patternIndex+2])-1;
      }
    }
    else if(char === pattern[patternIndex+4]){
      patternIndex = patternIndex+4;
      if(mapPatterns[char] < 1){
        return false
      }
      else if(mapPatterns[char]){
        mapPatterns[char] = --mapPatterns[char];
      }
      else {
        mapPatterns[char] = parseInt(pattern[patternIndex+2])-1;
      }
    }
    else{
      return false;
    }
  }
  return true;
};
console.log(`"ab" in a(1)b(1) ---> true`, matchstr("ab", "a(1)b(1)"));
console.log(`"z" in a(4)b(4) --> false`, matchstr("z", "a(4)b(4"));
console.log(`"aaaa" in a(3)b(3) ---> false`, matchstr("aaaa", "a(3)b(3)"));
console.log(`"aab" in a(3)b(3) ---> true`, matchstr("aab", "a(3)b(3)"));
console.log(`"aabbbbb" in a(3)b(3) ---> false`, matchstr("aabbbbb", "a(3)b(3)"));