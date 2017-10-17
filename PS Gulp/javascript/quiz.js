'use strict';

function questions() {
	var answers = ["", "", ""];
	var questions = ["What is the capital of Germany?", "What is the capital of France?", "What is the capital of Italy?"];
	var j;
	var i;

	for(j = 0; j < 3; j++) {
		answers[j] = prompt(questions[j]);
	}

	var answerList = document.createElement('ul');
	showcase.after(answerList);
	for(i = 0; i < 3; i++) {
		var answerListItem = document.createElement('li');
		answerListItem.innerHTML = answers[i];
		answerList.appendChild(answerListItem);
	}
}

questions();