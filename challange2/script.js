function printFullAge (years) {
	var personsYear = [];
	var moreThan18 = [];

	for (var i = 0; i < years.length; i++) {
		personsYear.push(years[i]);
	}

	for (var i = 0; i < years.length; i++) {
		if (2018 - years[i] > 18) {
			moreThan18.push(true);
		} else {
			moreThan18.push(false);
		}
	}
	return moreThan18;
}

var years = [1999, 1292, 2212, 1223, 2001];

console.log(printFullAge(years));
