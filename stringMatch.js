
//checks that all letters in second word are in the first word
function mutation(arr){
  var wordOne = arr[0].toLowerCase();
  var wordTwo = arr[1].toLowerCase();
  var charsLeft = wordOne;

  for(var i = 0; i < wordTwo.length; i++){
    var character = wordTwo[i];
    var index = charsLeft.indexOf(character);

    if(index > -1){
      charsLeft = charsLeft.substring(0, index) + charsLeft.substring(index+1, charsLeft.length);
    }
    else{
      return false;
    }

  }
  return true;
}


console.log("true", mutation(["Mary", "Army"]) );
console.log("true", mutation(["Maryy", "Army"]) );
console.log("false", mutation(["Mary", "Armyy"]) );