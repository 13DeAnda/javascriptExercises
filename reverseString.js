//Create a function that takes a string as its argument and returns the string in reversed order.
// "Hello World" ➞ "dlroW olleH"

// "The quick brown fox." ➞ ".xof nworb kciuq ehT"

// "Edabit is really helpful!" ➞ "!lufpleh yllaer si tibadE"

function reverse(str) {
  var reversed = "";

  for(var i = str.length - 1; i > -1; i --){
    reversed += str[i];
  }
  
  return reversed;
}
console.log(reverse("Hello World"));
