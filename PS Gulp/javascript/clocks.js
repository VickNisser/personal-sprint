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