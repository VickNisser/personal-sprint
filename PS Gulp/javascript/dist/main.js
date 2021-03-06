'use strict';

function timer(t) {
	
	var countdownEnd = t;
	var currentTime = new Date().getTime();
	var timeRemaining = countdownEnd - currentTime;
	var clock = document.getElementsByTagName("section");

	var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

	document.getElementById("clock").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes And " + seconds + " Seconds Remaining ";
	if(seconds < 11) {
		clock[4].className = "clock";
	}
	else {
		clock[4].className = "highlighted-products__view-icon--middle";
	}
	
}

function analog() {
	var time = new Date().getTime();
	var hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
	var second = Math.floor((time % (1000 * 60)) / 1000);

	var hourHand = document.getElementById('hour-hand');
	var minuteHand = document.getElementById('minute-hand');
	var secondHand = document.getElementById('second-hand');

	
}

var clock = setInterval(function(){timer(new Date("Jan 1, 2018 00:00:00").getTime())}, 1000);
var analogClock = setInterval(function(){analog()}, 1000);
'use strict';

//change the contents of a node by classname and their position in the returned collection of nodes
function changeNode(nodeToChange, listnum) {
	var requestedContent = prompt("input content to be shown in selected node");
	document.getElementsByClassName(nodeToChange)[listnum].innerHTML = requestedContent;
}

//add some nodes to the wireframe with a function using DOM
function addNodes() {

	//using appendChild and an ID
	var listItem = document.createElement('li');
	listItem.classList.add('introduction__list-item');
	listItem.innerHTML = 'I was added using DOM';
	ilist.appendChild(listItem);
	ilist.setAttribute('style','margin-right:32.5%')

	//using after and an ID
	var inputField = document.createElement('input');
	inputField.setAttribute('type','text');
	inputField.setAttribute('placeholder', 'i was added using DOM');
	inputField.classList.add("form__text-input");
	txtarea.after(inputField);

	//using prepend, the classname and the position in the collection of nodes with that name
	var footerText = document.createElement('p');
	footerText.setAttribute('class', 'footer__text');
	footerText.setAttribute('style', 'color:pink');
	footerText.innerHTML = 'Some footer text using DOM';
	var nodeDestination = document.getElementsByClassName('footer')[0];
	nodeDestination.prepend(footerText);
}

//read data from the json file and display it in a list
function readJson() {
	var request = new XMLHttpRequest();
	
	request.open('GET', 'hobbies.json', true);

	request.onload = function () {
		var hobbies = JSON.parse(this.response);
		var i;

		var list = document.createElement('ul');
		showcase.after(list);
		for(i = 0; i < 3; i++) {
			var hobbyListItem = document.createElement('li');
			hobbyListItem.innerHTML = hobbies[i].hobby;
			list.appendChild(hobbyListItem);
		}
	}
	request.send();
}

//confirm user wants to leave the page
window.onbeforeunload = function confirmExit() {
	return "Please Stay :'(";
}

readJson();
addNodes();

'use strict';

function oddsAndEvens() {
	var i;
	for (i = 0; i < 21; i++){
		var check = i % 2 ;
		if(check === 0) {
			console.log('This number is even');
		}
		else {
			console.log('This number is odd')
		}
	}
}

function largestNumber() {
	var numbers = [24,78,56,214,145];
	var i;
	var j;

// finding the largest number in an arry using 2 for loops and an if-else
	for (i = 0; i < 4; i++) {
		for(j = 4; j > 0; j--) {
			if (numbers[i] > numbers[j]) {
				var largest = numbers[i];
			}
			else {
				var largest = numbers[j];
			}
		}
	}
	
	console.log(largest);
	alert('the largest number is: ' + largest);
// finding the largest number the 'easy' way
	var max = Math.max(...numbers);
	alert('the largest number is: ' + max);
}

function reverseNumber(number) {
//reversing a number by turning it into a string and then an array and splitting+reversing it.
	var number = number;
	return number.toString(10).split("").reverse().join("");
}

console.log(reverseNumber(25683));
oddsAndEvens();
largestNumber();
'use strict';

const button = document.getElementById('button');

function trim() {
	var trim = document.getElementsByClassName('introduction__paragraphs--readmore');
	trim[0].setAttribute('style','display:none');
	trim[1].setAttribute('style','display:none');
	button.setAttribute('onclick','display()');
	button.innerHTML = "Read more";
}

function display() {
	var display = document.getElementsByClassName('introduction__paragraphs--readmore');
	display[0].setAttribute('style','display:flex');
	display[1].setAttribute('style','display:flex');
	var button = document.getElementById('button');
	button.setAttribute('onclick','trim()');
	button.innerHTML = "Read less";
}

const slideImage = document.createElement('img');
slideImage.className = 'image--hidden';
slideImage.setAttribute('src','images/location.jpg')
footer.prepend(slideImage);

function scroll() {

	if (document.documentElement.scrollTop > 1100) {
		slideImage.className = 'image--shown';
	}
	else {
		slideImage.className = 'image--hidden';
	}
}

trim();
window.onscroll = function() {scroll()};

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