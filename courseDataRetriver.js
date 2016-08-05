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
var data = ["CS111 2016Fall","CS-111 Fall 2016", "MATH 123 2015 Spring", "CS111 fall 14","CS111 F2014"];

function getCourse(data){
	var course = {};
	
	  course.department = data[0];
	  course.number = Number(data[1]);
	
	  course.semester = isNaN(data[2])? data[2] : data[3];
	  var year = isNaN(data[2])? data[3] : data[2];
	
	if(year.length < 4){
	  	year = "20" + year;
	  }
	
	 course.year = Number(year);
	
	return course;
};

function getData(data){
  	var retrivedData = [];
  	var pastCharacter;
  	var word = "";
	
  	_.forEach(data, function(character, index){
		if(character === " " || character === "-"){
	    		retrivedData.push(word);
	        	word = character;
		}
		else if(index === data.length-1){
		    	word += character;
		    	retrivedData.push(word);
	        }
		else if(word !== "" && isNaN(pastCharacter) !== isNaN(character)){
		        retrivedData.push(word);
		        word = character;    
		}
		else{
		    	word += character;
		}
		pastCharacter = character;
  });
  
  return retrivedData;
};

var dataArray = getData(data[0]);
var course = getCourse(dataArray);

console.log(dataArray, course);
