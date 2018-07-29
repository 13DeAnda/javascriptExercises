//reverse a string recursebly

var string = "hola";

function reverse(string, length){

  length = length? --length : --string.length;

  if(length > 0){
    return string[length] + reverse(string, length);
  }
  else{
    return string[length];
  }
}

console.log(reverse(string));