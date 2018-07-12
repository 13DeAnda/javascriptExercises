//Calculate the angle between hour hand and minute hand

var hour = "4";
var minute = "35";

function getAngleInBetween(hour, minute){
  var minuteAngle = 360 / (60 - minute);
  var hourAngle = 360 / (12 - hour);

  var angle = minuteAngle > hourAngle? minuteAngle - hourAngle : hourAngle - minuteAngle;

  return angle;

}

console.log("the angle in between", getAngleInBetween(hour, minute) );
