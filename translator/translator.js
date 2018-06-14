var AMLTranslator = (function () {
  var module = {};

  function addNewTags(finalText, tagPosition, tags, endTagLength, startAdded){
    var textToChange = finalText.slice(tagPosition.start + startAdded, tagPosition.end);
    var newTextWithTags = tags.tag + textToChange.slice(tagPosition.startTagIndex, textToChange.length - endTagLength) + tags.endTag;
    return finalText.replace(textToChange, newTextWithTags);
  }

  module.translate = function (text){
    var error = "ERROR: invalid aml format"

    if(typeof text !== "string"){
      return error; // non unvalid strings
    }

    var finalText = text;
    var shiftedChars = 0;
    var unclosedTag = null;
    var lastIndexView = 0;

    var symbolTags = {
      '%': {
          tag: "<STRONG>",
          endTag: "</STRONG>"
      },
      '~': {
          tag: "<EM>",
          endTag: "</EM>"
      } //reference for available tags per symbol
    };
    var tagMap = {}; //declares position replacement of the new html tags

    for(var i = 0; i < text.length; i++ ){
      var char = text[i];
      var secondChar = text[i+1];
      var thirdChar = text[i+2];

      if(char === '^'  && secondChar){
        if(symbolTags[thirdChar] && secondChar === '!'){
          var startAdded = 0;
          for(tag in symbolTags){//closes all opened tags
            var lastTagAddedIndex = tagMap[tag] ? tagMap[tag].length - 1 : 0;
            var endTagLength = (tag === thirdChar) ? 3 : 0;

            if(tagMap[tag] && !tagMap[tag][lastTagAddedIndex].end){
              tagMap[tag][lastTagAddedIndex].end = i + shiftedChars + 3 - tagMap[tag][lastTagAddedIndex].startTagLength;

              finalText = addNewTags(finalText, tagMap[tag][lastTagAddedIndex], symbolTags[tag], endTagLength, startAdded);
              startAdded += symbolTags[tag].tag.length - 2;

              shiftedChars = shiftedChars + symbolTags[tag].tag.length  - endTagLength - 2;
              shiftedChars = endTagLength? shiftedChars : symbolTags[tag].endTag.length + shiftedChars;

              lastIndexView += (symbolTags[tag].tag.length + symbolTags[tag].endTag.length + endTagLength - 2);

              //if it's not closed by it's actual tag will need to be closed later.
              if(endTagLength === 0 && !unclosedTag){
                unclosedTag = {tag: tag};
              }
            }
          }
          if(unclosedTag){
            tagMap[unclosedTag.tag].push(
              {start: i + lastIndexView - 3,
               end:null,
               startTaglastTagAddedIndex: 0,
               startTagLength: symbolTags[tag].tag.length + 1
             });
            unclosedTag = null;
          }
          shiftedChars = lastIndexView -1;
          i += 2;
        }
        else if(symbolTags[secondChar]){
          if(!tagMap[secondChar]){
            tagMap[secondChar] = [{start: i, end: null, startTagIndex:2, startTagLength: 0}];
          }
          else if(!tagMap[secondChar][tagMap[secondChar].length -1].end){ //invalid if previous unclosed
            return error;
          }
          else{
            tagMap[secondChar].push({start: i, end: null, startTagIndex:2, startTagLength: 0});
          }
        }
        else if(!symbolTags[secondChar] || !symbolTags[third]){
          return error; // no bare ^ elements
        }
      }
      else if(char === '^'){
        return error; // no bare ^ elements
      }
    }

    //
    for(tag in tagMap){
      var lastIndex = tagMap[tag].length -1
      if(!tagMap[tag][lastIndex].end){
        return error //all opened tags must be closed
      }
    }

    if(unclosedTag){
      return error; //all opened tags must be closed
    }
    return finalText;
  }

  return module;
})();
  if (module.exports) {
  module.exports = AMLTranslator;
}
