/*Given a list of pies (and the number of slices in each pie) calculate the maximum number of slices that nPeople could receive if each person got the same amount of slices and did not get slices from more than 1 pie.*/

var pies =[{
    name : "apple",
    slices: 20,
  },
  {
    name : "cheescake",
    slices: 7,
  },
  {
    name : "cinamon",
    slices: 6,
  },
  {
    name : "rasberry",
    slices: 5,
  }
];

function pieDivide(pies, people){
		_.forEach(pies, function(pie){
    		var slicePerPerson = pie.slices/people;
    		if(slicePerPerson >= 1){
        	console.log(Math.floor(slicePerPerson), " slices of ", pie.name);
        }
        else{
        	console.log("0 slices of ", pie.name);
        }
    });
};

pieDivide(pies, 6);
