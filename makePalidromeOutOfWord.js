/*Given a string return the longest palindrome that can be constructed by removing or shuffling characters. 

Example: 
'aha' -> 'aha' 
'ttaatta' -> ' ttaaatt' 
'abc' -> 'a' or 'b' or 'c' 
'gggaaa' -> 'gaaag' or 'aggga' 

Note if there are multiple correct answers you only need to return 1 palindrome.
*/

function getPalidrome(word){
	var mapWords = {};
  var first ="";
  var second = "";
  var single = null;
  _.forEach(word, function(character){
  	if(mapWords[character]){
    	mapWords[character]++;
      if(single === character){
      	single = null;
      }
      if(mapWords[character] === 2){
      	mapWords[character] = 0;
        first += character;
        second += character;
      }
    }
    else{
    	mapWords[character] = 1;
      single = character;
    }
  });	
  if(single){
  	console.log(first+single+second);
  }
};

getPalidrome("b");
