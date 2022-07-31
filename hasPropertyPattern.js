// given a pattern a.b.c. check if the keys from a json follow the pattern.
//ex: a.b.c. should be good for situations stated on the test below the function

function hasPropertyPattern(pattern, obj){
  var patternLeft = pattern;
  for(var key in obj){
    var item = obj[key];
    
    if(key === patternLeft[0]){
      var patternLeft = patternLeft.slice(2, patternLeft.length);

      if(patternLeft.length === 0){
        return true;
      }
      if(typeof item === "object"){
        if(hasPropertyPattern(patternLeft, item)){
          return true;
        }
      }
    }
  }

  if(patternLeft.length > 0){
    return false;
  }
}


// test values

var pattern ="a.b.c";

var valueOne = {
  a:{
    b: {
      c: "hello"
    }
  }
};
console.log("valueOne: True", hasPropertyPattern(pattern, valueOne));

var valueTwo = {
  a: "some",
  b: "true",
  c: "pattern"
};
console.log("ValueTwo: True", hasPropertyPattern(pattern, valueTwo));

var valueThree = {
  a:{
    b: {
      d: "hello"
    }
  }
};
console.log("ValueThree: False", hasPropertyPattern(pattern, valueThree));

var valueFour = {
  a:{
    b: {
      d: "hello"
    }
  },
  b: "hello",
  c: "world"
};
console.log("Value Four: True", hasPropertyPattern(pattern, valueFour));