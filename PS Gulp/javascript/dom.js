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
