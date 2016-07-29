/**
On our site, students can enter the course information for the courses they are taking.
The format is any combination of
Department + course number and Semester + year.

Department and Semester are always alphabetical.
Course number and year are always numeric.

Department is always first.
Course number is always second.

Semester can be either 3rd or 4th.
Year can be either 3rd or 4th.

Valid forms of Department+Course Number are:
CS111
CS 111
CS:111
CS-111 

And valid forms of Semester+Year are:
Fall 2014
fall 14
2014 Fall
F2014

Semesters are Fall (F), Winter (W), Spring (S), Summer (Su).

For example, all of the above combinations would give you:
Department: CS
Course Number: 111
Year: 2014
Semester: Fall

"CS111 2016 Fall"
"CS-111 Fall 2016"
"MATH 123 2015 Spring"
"CS111 fall 14"
"CS111 F2014"
**/



var studentCourses = {};

var data = "MATH 123 2015 Spring";

var semesterAbreviation = {
      f: 'fall',
      s: 'spring',
      su: 'summer',
      w: 'winter'    
};

function transformData(data){
  var course = {};
  var quarter;
  course.Department = data[0];
  course.courseNumber = data[1];
  
  if(Number(data[2]) !== NaN){
      year = data[2];
      quarter = data[3];
    
  }
  else{
     year= data[3];
    quarter = data[2];
  }
  
  if(quarter.length < 2){
      course.quarter = semesterAbreviation[quarter];    
      
  }
  else{
    course.quarter = quarter;
  }

  if(String(
  
  return course;
}


function getData(string){
  var retrivedData = [];

  var value = "";
  var pastValue = "";

    for(int i =0; i < data.length; i++){
    var character = data[i];
    if(pastValue === " " || pastValue === "" || typeof pastValue !== character){

      if(Number(value) !== NaN){
        value = Number(value);
      }
      else{
        value.toLowerCase;
      }
      retrivedData.push(value);
      value = "";
    }

    value += character;
    if(Number(value) !== NaN){
      pastValue = character;
    }
    else{
      pastValue = Number(character);
    }
  }
  
  return retrivedData;
}


