'use strict';

//change the contents of a node by classname and their position in the returned collection of nodes
function changeNode(nodeToChange, listnum){
	let requestedContent = prompt("input content to be shown in selected node");
	document.getElementsByClassName(nodeToChange)[listnum].innerHTML = requestedContent;
}

//add some nodes to the wireframe with a function
function addNodes(){
	let listItem = document.createElement('li');
	listItem.classList.add('introduction__list-item');
	listItem.innerHTML = 'I was added using DOM';
	ilist.appendChild(listItem);
	ilist.setAttribute('style','margin-right:32.5%')

	let inputField = document.createElement('input');
	inputField.setAttribute('type','text');
	inputField.setAttribute('value', 'i was added using DOM');
	inputField.classList.add("form__text-input");
	txtarea.after(inputField);
}



changeNode("highlighted-products__view-text", 1);
addNodes();
