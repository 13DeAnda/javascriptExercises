// given a pattern a.b.c. check if the keys from a json follow the pattern.
//ex: a.b.c.


function hasPropertyPattern(pattern, obj){
  console.log(pattern, obj);
  var patternExist = true;
  var patternLeft = pattern;
  for(var key in obj){
    var item = obj[key];

    if(key === patternLeft[0]){
      var patternLeftToValidate = patternLeft.slice(2, patternLeft.length);

      if(patternLeftToValidate.length === 0){
        return true;
      }

      if(typeof item === "object"){
        var foundPattern = hasPropertyPattern(patternLeftToValidate, item);
        if(foundPattern){
          return true;
        }
      }
      patternLeft = patternLeftToValidate;
    }
    else{
      patternLeft = pattern;
    }
  }

  if(patternLeft.length > 0){
    return false;
  }
}


var pattern ="a.b.c";
var valueOne = {
  a:{
    b: {
      c: "hello"
    }
  }
};
console.log("True", hasPropertyPattern(pattern, valueOne));

var valueTwo = {
  a: "some",
  b: "true",
  c: "pattern"
};
console.log("True", hasPropertyPattern(pattern, valueTwo));

var valueThree = {
  a:{
    b: {
      d: "hello"
    }
  }
};
console.log("False", hasPropertyPattern(pattern, valueThree));

var valueFour = {
  a:{
    b: {
      d: "hello"
    }
  },
  b: "hello",
  c: "world"
};
console.log("True", hasPropertyPattern(pattern, valueFour));