/* List of string that represent class names in CamelCaseNotation. 

Write a function that given a List and a pattern returns the matching elements. 

['HelloMars', 'HelloWorld', 'HelloWorldMars', 'HiHo'] 

H -> [HelloMars, HelloWorld, HelloWorldMars, HiHo] 
HW -> [HelloWorld, HelloWorldMars] 
Ho -> [] 
HeWorM -> [HelloWorldMars]
*/

var wordsAvailable = ['HelloMars', 'HelloWorld', 'HelloWorldMars', 'HiHo'];

function getPrediction(searchWord){
  var predictions = [];
  
  _.forEach(wordsAvailable, function(word){
    var wordArray = word.match(/([a-zA-Z][a-z]*)/g);
    var searchWordArray = searchWord.match(/([a-zA-Z][a-z]*)/g);
    var isMatch = true;
   
    for(var i = 0; i < searchWordArray.length; i++){
      if(wordArray[i] && searchWordArray[i] !== wordArray[i].slice(0, searchWordArray[i].length)){
      	isMatch = false;
        break;
      }
    }
    if(isMatch){
      predictions.push(word);
    }
  });
  console.log("predictions", predictions);
};

getPrediction("Ho");
