/*Given an input string and ordering string, need to return true if the ordering string is present in Input string. 

input = "hello world!" 
ordering = "hlo!" 
result = FALSE (all Ls are not before all Os) 

input = "hello world!" 
ordering = "!od" 
result = FALSE (the input has '!' coming after 'o' and after 'd', but the pattern needs it to come before 'o' and 'd') 

input = "hello world!" 
ordering = "he!" 
result = TRUE 

input = "aaaabbbcccc" 
ordering = "ac" 
result = TRUE */


function rightOrdering(patternInput, input){
	var words = input.split('');
	var isPattern = true;
  
	_.each(words, function(word){
  		var pattern = getPattern(word, patternInput);
      	if(pattern !== patternInput){
        	isPattern = false;
        	return false.
        }
  });
  return isPattern;
}

function getPattern(word, pattern){
	var newPattern = "";
	_.forEach(word, function(character){
  	if(pattern.indexOf(character) > -1){
    	newPattern += character;
    }
  });
  return newPattern;
}
