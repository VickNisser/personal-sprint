'use strict';

//change the contents of a node by classname and their position in the returned collection of nodes
function changeNode(nodeToChange, listnum){
	let requestedContent = prompt("input content to be shown in selected node");
	document.getElementsByClassName(nodeToChange)[listnum].innerHTML = requestedContent;
}

//add some nodes to the wireframe with a function using DOM
function addNodes(){

	//using appendChild and an ID
	let listItem = document.createElement('li');
	listItem.classList.add('introduction__list-item');
	listItem.innerHTML = 'I was added using DOM';
	ilist.appendChild(listItem);
	ilist.setAttribute('style','margin-right:32.5%')

	//using after and an ID
	let inputField = document.createElement('input');
	inputField.setAttribute('type','text');
	inputField.setAttribute('value', 'i was added using DOM');
	inputField.classList.add("form__text-input");
	txtarea.after(inputField);

	//using prepend, the classname and the position in the collection of nodes with that name
	let footerText = document.createElement('p');
	footerText.setAttribute('class', 'footer_text');
	footerText.setAttribute('style', 'color:pink');
	footerText.innerHTML = 'Some footer text using DOM';
	let nodeDestination = document.getElementsByClassName('footer')[0];
	nodeDestination.prepend(footerText);
}

changeNode("highlighted-products__view-text", 1);
addNodes();
