//Find the first non-repeated character in a String.

var name = "dazababiissso";
var repeated = {};

_.each(name, function(chara, i){
  repeated[chara] = repeated[chara]? ++repeated[chara]: 1;
  var shortString = name.slice(i+1, name.length);
  	
  if(shortString.indexOf(chara) < 0 && repeated[chara] === 1){
    console.log("the first non repeated character in the string is:", chara);
    return false;
  }
});
