/*Given a Pattern and a dictionary, print out all the strings that match the pattern. 
where a character in the pattern is mapped uniquely to a character in the dictionary ( this is what i was given first). 

e.g 1. ("abc" , <"cdf", "too", "hgfdt" ,"paa">) -> output = "cdf" 
2. ("acc" , <"cdf", "too", "hgfdt" ,"paa">) -> output = "too", "paa" */

var pattern = "acc";
var dictionary = ["cdf", "too", "hgfdt" ,"paa"];

function getMatch(pattern, dictionary){
   var patternMap = getPattern(pattern);
    _.forEach(dictionary, function(word){
      if(word.length === pattern.length){
      	if(patternMap === getPattern(word)){
        	console.log(word);
        }			
      }
    });
};
function getPattern(word){
	var wordMap = {};
	var pattern = "";
  
	_.forEach(word, function(character, index){
		if(!wordMap[character]){
    		wordMap[character] = index;
    }
		pattern += wordMap[character]; 
  });
  
  return pattern;
}

getMatch(pattern, dictionary);
