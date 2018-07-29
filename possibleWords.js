
//given a max length x,
//return all possible generated words with that max length
//ex: aa, aaa, abcdf,

var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
var words = [];
var maxLength = 2;

function possibleWords(){
  for(var i = 0; i < alphabet.length; i++){
    var letter = alphabet[i];
    recurse(letter);
  }
 console.log("the words", words);
}

function recurse(word) {
  if(word.length > maxLength){
      return ;
  }

  words.push(word);

  for(var j = 0; j < alphabet.length; j++){
      var letter = alphabet[j];
      recurse(word + letter);
  }
}
possibleWords();