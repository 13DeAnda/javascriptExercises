//if given two sorted simple arrays
//merge them into a single sorted array

function sort(arr1, arr2){
  var sorted = [];
  var spliceIndex = 0;
  for(var i = 0; i < arr1.length; i++){
    var element1 = arr1[i];

    for(var j = spliceIndex; j < arr2.length; j++){
      var element2 = arr2[j];
      if(element2 < element1){
        spliceIndex = j+1;
        sorted.push(element2)
      }
      else{
        break;
      }
    }
    sorted.push(element1);
  }

  if(spliceIndex < arr2.length){
    var leftArray = arr2.splice(spliceIndex, arr2.length);
    sorted = sorted.concat(leftArray);
  }
  return sorted;
}

var arr1 = [5,7,8,90];
var arr2 = [1,3,6,45,100];
console.log(sort(arr1, arr2));



function test(array1, array2) {
  var counter1 = 0;
  var counter2 = 0;
  var finishedArray = [];

  for (var i = 0; i < (array1.length + array2.length); i++) {
    if ((counter1 <= array1.length) && (counter2 > array2.length || array1[counter1] < array2[counter2])) {
      finishedArray.push(array1[counter1]);
      counter1++;
    } else {
      finishedArray.push(array2[counter2]);
      counter2++;
    }
  }

  return finishedArray;
}

console.log(test([1,5,8], [2,3,4,6,7]));

