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

function retriveCourseData(course){
    var department = ""
    var courseNumber = ""
    var semester = ""
    var year = ""
    var courseArr = course.split(/\-|\s/);

    courseArr.forEach(element => {
      if(isNaN(element)){
        let stringParse= ""
        let numberParse = ""
        for(let index in element){
          const char = element[index];
          if(isNaN(char)){
            stringParse += char;
          }
          else{
            numberParse +=char;
          }
        }
        //to send in function
        if(!department.length){
          department  = stringParse;
        }
        else if(!semester.length){
          semester = stringParse;
        }

        if(!courseNumber.length){
          courseNumber = numberParse;
        }
        else if(!year.length){
          year = numberParse;
        }

      }
      else if(!courseNumber.length){
        courseNumber = element;
      }
      else if(!year.length){
        year = element;
      }


    });

    return {department: department, course: courseNumber, semester: semester, year: year};
  }


console.log(retriveCourseData("CS111 2016 Fall"));
console.log(retriveCourseData("CS-111 Fall 2016"));
console.log(retriveCourseData( "MATH 123 2015 Spring"));
console.log(retriveCourseData("CS111 fall 14"));
console.log(retriveCourseData("CS111 F2014"));