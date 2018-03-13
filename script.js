// Leacture: variables
/*
var name = 'Rinat';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables2
/*
var name = 'Jonh';
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;
console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job
														+ '. Is he married? ' + isMarried + '.');

age = 'trirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job
														+ '. Is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last name');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job
														+ '. Is he married? ' + isMarried + '.');
*/

// Lecture: operators
/*
var now = 2016;

var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26;
//ageJohn = 26

ageJohn++;
//ageJohn = ageJohn + 1;

ageMark *= 2;
//ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*/

/////////////////////////////////////////////////
//	Lectture: if/else statements	//////////////
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
	console.log(name + ' is married!');
} else {
	console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if (isMarried) {
	console.log('YES!');
} else {
	console.log('NO!');
}



if (isMarried) {
	console.log('YES!');
}

if (23 == '23') {
	console.log('equal');
}
*/


/////////////////////////////////////////////////
//	Lectture: boolean logic and switch	////////
/*
var age = 35;

if (age < 20) {
	console.log('John is a teenager!');
} else if (age > 20 && age < 30) {
	console.log('John is a young man!');
} else {
	console.log('John is a man!');
}

var job = 'cop';

job = prompt("John's job");	

switch (job) {
	case 'teacher':
		console.log('teacher');
		break;
	case 'driver':
		console.log('driver');
		break;
	case 'cop':
		console.log('cop');
		break;
	default:
		console.log('somethig else');
}
*/


/////////////////////////////////
//	Lectture: Functions	////////
/*
function calculateAge(yearOfBirth) {
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1999);

function yearsUntilRetirement(name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	if (retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years.');	
	} else {
		console.log(name + ' is already retired.');
	}
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

//////////////////////////////////////////////////
//	Lectture: Statements and expressions	////////
/*
function someFun(par) {
	//code
}

var someFun = function(par) {
	//code
}
*/

///////////////////////////////
//	Lectture: Arrays	////////
/*
var names = ['John', 'Mike', 'Jane'];

var years = new Array(1990, 1969, 1999);

console.log(names[2]);
name[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();

console.log(john);

if (john.indexOf('teacher') === -1) {
	console.log(john[0] + ' is not a ' + 'teacher');
}
console.log(john);
*/

///////////////////////////////
//	Lectture: Objects	////////
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';

console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();

jane.name = 'Jane';
jane['lastName'] = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

/////////////////////////////////////
//	Lectture: Objects and methods	///
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	familly: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		return 2016 - this.yearOfBirth;
	}
};


console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	familly: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		this.age = 2016 - this.yearOfBirth;
	}
};

console.log(john);
john.calculateAge();
console.log(john);
*/


/////////////////////////
//// Lecture: Loops	////
/*
for (var i = 0; i < 10; i++) {
	console.log(i);
}


var names = ['john', 'mark', 'bob', 'jane', 'mary'];

for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
	console.log(names[i]);
}

var names = ['john', 'mark', 'bob', 'jane', 'mary'];

var i = 0;
while (i < names.length) {
	console.log(names[i]);
	i++;
}
*/

/////////////////////////////////////////
//// Lecture: Hoisting in practice	////




























