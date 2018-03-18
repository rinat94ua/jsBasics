var Question = function (quest, answ, correctAnsw) {
	this.question = quest;
	this.answers = answ;
	this.correctAnswer = correctAnsw;
};

var todayYear = new Question('Today year?', [1990, 1992, 2017, 2018], 3);
var courseTeacher = new Question('Name of course teacher?', ['Jonas', 'Rinat', 'Adil'], 0);

var questions = [todayYear, courseTeacher];
logQuestion(questions);

function logQuestion (questionArray) {
	var questionIndex = Math.floor(Math.random() * questionArray.length);

	console.log(questionArray[questionIndex]['question']);
	
	questionArray[questionIndex]['answers'].forEach(function(el, index) {
		console.log(index + ' ' + el);
	});

	var availableNumbers = 'Enter number from ' + 0 + ' to ' + (questionArray[questionIndex]['answers'].length - 1);

	var userAnswer = prompt(availableNumbers);

	if ((1 * userAnswer) === questionArray[questionIndex]['correctAnswer']) {
		console.log('corrent');
	} else {
		console.log('uncorrect');
	}
}
