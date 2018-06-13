/*write code for this function matchstr() given
"ab" in a(1)b(1) ---> true
"z" in a(4)b(4) --> false
"aaaa" in a(3)b(3) ---> false
"aab" in a(3)b(3) ---> true
"aaba" in a(3)b(3) ---> true

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

function(string, pattern){
  pattern = getPatternMap(pattern);
  var patternString = "ab";
  var stringGot = "";
  _.forEach(string, function(character, index){
    if(patternMap[character]){
      	if(patternMap[character] === 1){
          stringGot += character;
        }
      	patternMap[character]--;
      }
      else{
      	return false;
      }
  });
  
  if(stringGot === patternString){
    return true;
  }
}
