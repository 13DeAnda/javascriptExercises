//Write a function that finds the common elements in 2 int arrays

function getCommonElements(array1, array2){
	var commonElementsMap = {};
  var commonElements = [];
  
	for(var i = 0; i < array1.length; i++){	
		var element1 = array1[i];
		if(!commonElementsMap[element1]){
  		commonElementsMap[element1] = 1;
  	}
	}
  for(var j = 0; j < array2.length; j++){
  	var element2 = array2[j];
    if(commonElementsMap[element2] === 1){
    	commonElements.push(element2);
      commonElementsMap[element2] ++;
    }
  }
  console.log("the common elements", commonElements);
}

var array1 = [1,3,2,5,35,10,24];
var array2 = [3,35,56,24,54,35];

getCommonElements(array1,array2);
