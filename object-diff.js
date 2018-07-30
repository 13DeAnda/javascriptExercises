//given two objects return a string with reclects which items were added or deleted
//ex for below objects
// returns:
// [
//   ['-', 'grapes', 5],
//   ['+', 'oranges', 4]
// ]

var oldCode = {
  apples: 3,
  grapes: 5
};


var newCode = {
  apples: 3,
  oranges: 4
};

function objectDiff(newCode, oldCode){
  var diff = [];

  for(var tag in newCode){
    console.log("the tag", tag);
    if(oldCode[tag] && oldCode[tag] !== newCode[tag]){
      diff.push(['+', tag, newCode[tag]]);
    }
    else if (!oldCode[tag]){
      diff.push()
    }
  }
}

objectDiff(newCode, oldCode);