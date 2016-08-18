/*write code for this function matchstr() given
"ab" in a(1)b(1) ---> true
"z" in a(4)b(4) --> false
"aaaa" in a(3)b(3) ---> false
"aab" in a(3)b(3) ---> true
"aaba" in a(3)b(3) ---> true

*/

function(string, pattern){
	var patternMap = { a: 3, b: 3};
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
