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
