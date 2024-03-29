//isEquals
//implementation of lodash library isEquals
//quals of arrays, objects, integers, strings.

function isEquals(element1, element2){
  if(element1 === element2){
    return true;
  }
  else if(typeof element1 === 'object' && typeof element2 === 'object'){
    var element1Length = Array.isArray(element1)? element1.length : Object.keys(element1).length;
    var element2Length = Array.isArray(element2)? element2.length : Object.keys(element2).length;

    if(element2Length === element1Length){
      var result = true;
      for(var key in element1){
        if(element1[key]  && element2[key]){
          result = isEquals(element1[key], element2[key]);

          if(!result){
            return false;
          }
        }
        return false;
      }
      return result;
    }
    else {
      return false;
    }
  }
  return false;
}

// integers
var element1 = [1,2,4];
var element2 = [1,3,4];

console.log('True', isEquals(element1, element1));
console.log('False', isEquals(element1, element2));


// simple json objects
element1 = {"one": 1, "two": 2, "four": 4};
element2 = {"one": 1, "two": 3, "four": 4};
element3 = {"one": 1, "two": 3};
console.log('True', isEquals(element1, element1));
console.log('False', isEquals(element1, element2));
console.log('False', isEquals(element1, element3));

// nested json

element1 = {"one": {"nest": 1}, "two": 6, "four": 4};
element2 = {"one": {"nest": 2}, "two": 2, "four": 4};
console.log('False', isEquals(element1, element2));
console.log('True', isEquals(element1, element1));
