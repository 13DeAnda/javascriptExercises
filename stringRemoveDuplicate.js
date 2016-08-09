var duplicateMap = {};
var word = "AAA BBB";
var newWord = "";

_.forEach(word, function(character){
  if(!duplicateMap[character]){
    newWord += character;
    duplicateMap[character] = 1;
  }
});

console.log(newWord);
