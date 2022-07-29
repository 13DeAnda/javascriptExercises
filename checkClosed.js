//if a string given, check that all brackets have been closed properly
/// if not propery closed send an error: //ex: ()()[{()}]


function checkProperlyClosed(string){
  const openBracket = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  };
  const closeBracket = {
    '}' : '{',
    ']' : '[',
    ')' : '('
  };
  var unclosed = [];
  for (const char of string){
    if(openBracket[char]){
      //its an open bracket push to the queue
      unclosed.push(char);
    }
    else if(unclosed.length && closeBracket[char]){
      const lastElement = unclosed[unclosed.length -1];
      if(closeBracket[char] !== lastElement){
        return false;
      }
      else{
        unclosed.pop();
      }
    }   
    else if(!unclosed.lenght && closeBracket[char]){
      return false;
    }
  };
  if(unclosed.length){
    return false;
  }
  return true
}

console.log("True", checkProperlyClosed("()[some]{[54*(5)]}"));
console.log("False", checkProperlyClosed("()["));
console.log("False", checkProperlyClosed("())"));
console.log("False", checkProperlyClosed("())("));