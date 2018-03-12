var friend1Age = 26;
var friend1Height = 180;

var friend2Age = 25;
var friend2Height = 165;

var friend3Age = 22;
var friend3Height = 195;

var friend1Score = friend1Age * 5 + friend1Height;
var friend2Score = friend2Age * 5 + friend2Height;
var friend3Score = friend3Age * 5 + friend3Height;

if (friend1Score > friend2Score && friend1Score > friend3Score) {
	console.log('First Player wins and has ' + friend1Score + ' scores!');
	console.log('Second Player wins and has ' + friend2Score + ' scores!');
	console.log('Third Player wins and has ' + friend3Score + ' scores!');
} 
else if (friend1Score < friend2Score && friend3Score < friend2Score) {
	console.log('Second Player wins and has ' + friend2Score + ' scores!');
} 
else if (friend1Score < friend3Score && friend3Score > friend2Score) {
	console.log('Third Player wins and has ' + friend3Score + ' scores!');
}  else {
	console.log('DRAW');
}


console.log('First Player wins and has ' + friend1Score + ' scores!');
console.log('Second Player wins and has ' + friend2Score + ' scores!');
console.log('Third Player wins and has ' + friend3Score + ' scores!');