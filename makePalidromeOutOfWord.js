/*Given a string return the longest palindrome that can be constructed by removing or shuffling characters. 

Example: 
'aha' -> 'aha' 
'ttaatta' -> ' ttaaatt' 
'abc' -> 'a' or 'b' or 'c' 
'gggaaa' -> 'gaaag' or 'aggga' 
\
Note if there are multiple correct answers you only need to return 1 palindrome.
*/

function getPalidrome(word){
  var mapWords = {};
  var firstSequence ="";
  var secondSequence = "";
  var singleChar = null;

    if(word.length < 2){
      return word;
    }
  
    for(let character of word){
        if(mapWords[character]){
          mapWords[character] = ++mapWords[character];
        }
        else{
          mapWords[character] = 1;
        }

        if(mapWords[character] % 2){
          singleChar = character;
        }
        else{
          firstSequence = firstSequence + character;
          secondSequence = secondSequence + character;
          if(singleChar === character){
            single = '';
          }
        }
    }	
    return firstSequence + singleChar + secondSequence;
};

console.log("b -> b", getPalidrome("b"),  getPalidrome("b") === "b" );
console.log("aha -> aha", getPalidrome("aha"),  getPalidrome("aha") === "aha" );
console.log("ttaatta ->  tatatat", getPalidrome("ttaatta"),  getPalidrome("ttaatta") === "tatatat" );
console.log("abc ->  c", getPalidrome("abc"),  getPalidrome("abc") === "c" );
console.log("gggaaa ->  gaaga", getPalidrome("gggaaa"),  getPalidrome("gggaaa") === "gaaga" );