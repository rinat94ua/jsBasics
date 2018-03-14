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














