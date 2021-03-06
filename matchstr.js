/*write code for this function matchstr() given
"ab" in a(1)b(1) ---> true
"z" in a(4)b(4) --> false
"aaaa" in a(3)b(3) ---> false
"aab" in a(3)b(3) ---> true
"aab" in a(3)b(3) ---> true

*/
function getPatternMap(string){
  var map = {};
  for(var i= 0; i < string.length; i++){
    var char = string[i];
    var leftString = string.slice(i, string.length);

    var pattern = leftString.slice(0, leftString.indexOf("("));
    var repeated = string.slice( pattern.length + 1, leftString.indexOf(")"));

    i+= pattern.length + repeated.length + 1;
    map[pattern] = parseInt(repeated);
  }
  return map;
}

function findMatch(string, patternMap){
  var i = 0;
  for(var pattern in patternMap){
    var foundPattern = 0;
    var noMoreMatches = false;

    while(foundPattern < patternMap[pattern] && i < string.length && !noMoreMatches){
      var stringToCheck = string.slice(i, i+pattern.length);

      if(stringToCheck === pattern){
        i+= pattern.length;
        foundPattern++;
      }
      else if(stringToCheck !== pattern && foundPattern > 0){
        noMoreMatches = true;
      }
      else{
        return false;
      }
    }
  }

  if(i < string.length){
    return i;
  }
  else{
    return true;
  }
}

function matchstr(string, pattern){
  var patternMap = getPatternMap(pattern);
  var i = 0;
  var result = string.length -1;

  while (typeof result === 'number'){
    var slice = string.slice(i, string.length);
    result = findMatch(slice, patternMap);
    i = result;
  }

  return result;
}

console.log(matchstr("aabc", "a(3)b(3)"));
