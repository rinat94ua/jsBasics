// Function constructor

/*
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};


var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person.prototype.calcAge = function(){
	console.log(2016 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';


var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1955, 'retired');

john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

//Object.create
/*
var personProto = {
	caclAge: function() {
		console.log(2016 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
	name: { value: 'Jane' },
	yearOfBirth: { value: 1990 },
	job: { value: 'designer' }
});
*/

// Primitives vs Objects
/*
//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
	name: 'John',
	age: 26
}

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Function
var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisbon'
};

function change(a, b) {
	a = 30;
	b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

var years = [1990, 1948, 1955, 1971, 2005, 1994];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
};

function caclAge(el) {
	return 2018 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	}

	return -1;
}

var res = arrayCalc(years, caclAge);
console.log(res);

var fullAges = arrayCalc(res, isFullAge);
console.log(fullAges);

var rates = arrayCalc(res, maxHeartRate);
console.log(rates);
*/

/////////////////////////////////////
// Functions: returning functions //
/*
function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you explain what design is?');
		};
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name + '?');
		};
	} else {
		return function(name) {
			console.log('Hello ' + name + ', what do you do?');
		};
	}
};

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/

//////////////////////////////////////////////////////
// Immediately invoked function expressions (IIFE) //
/*
function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();

(function () {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);
*/


////////////////
// Closures ///

/*
function retirement(retirementAge) {
	var a = ' year left until retirement';
	return function (yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
// retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);
retirementUS(1990);

//interview closure function
function interviewQuestion(job) {
	return function(name) {
		if (job === 'designer') {
			console.log(name + ', can you explain what design is?');
		} else if (job === 'teacher') {
			console.log('What subject do you teach, ' + name + '?');
		} else {
			console.log('Hello ' + name + ', what do you do?');
		}
	};
}

interviewQuestion('designer')('John');
*/

//////////////////////////////
//// Bind, Call, Apply //////
/*
var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' 
																			+ this.name + ', I\'m a ' + this.job 
																			+ ' and I\'m ' + this.age + ' yeard old.');
		} else if (style === 'friendly') {
			console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job 
																					 + ' and I\'m ' + this.age + ' yeard old. Have a nice '
																					 + timeOfDay + '.');
		}
	}
}

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(amily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening');
emilyFormal('morning');



var years = [1990, 1948, 1955, 1971, 2005, 1994];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
};

function caclAge(el) {
	return 2018 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}

var ages = arrayCalc(years, caclAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/