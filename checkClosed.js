//if a string given, check that all brackets have been closed properly
/// if not propery closed send an error
//ex: ()()[{()}]


function checkProperlyClosed(string){
  var openBracketMap = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  };
  var closeBracketMap = {
    '}' : '{',
    ']' : '[',
    ')' : '('
  };
  var unclosedBrackets = [];

  for(var i = 0; i < string.length; i++){
    var character = string[i];

    if(openBracketMap[character]){
      unclosedBrackets.push(openBracketMap[character]);
    }
    else if(closeBracketMap[character]){
      if(unclosedBrackets.length === 0 || unclosedBrackets[unclosedBrackets.length-1] !== character){
        return false;
      }
      else{
        unclosedBrackets.pop();
      }
    }
  }
  if(unclosedBrackets.length > 0){
    return false;
  }

  return true;
}

var text1 ="()[some]{[54*(5)]}";
console.log("True", checkProperlyClosed(text1));

var text2 ="()[";
console.log("False", checkProperlyClosed(text2));

var text3 ="())";
console.log("False", checkProperlyClosed(text3));

var text4 ="())(";
console.log("False", checkProperlyClosed(text3));