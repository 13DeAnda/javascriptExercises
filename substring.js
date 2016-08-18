//Given a string A and B, find the smallest substring of A that contains all the characters from B. (implement solution in O(n), keep in mind chars in B can repeat)  


var A = "moretha,basmygngbllobngngobglllsok";
var B = "gngob" = gngb

var BMap = {};
_.forEach(B, function(character){
	if(!BMap[character]){
  		BMap[character] = 1;
  }
});

var foundItems = 0;
var substring = "";
_.forEach(A, function(character){
		
  if(BMap[character]){
  	substring += character;
  }  
  
	if(BMap.length === foundItems){
  	return substring;
  }
});
