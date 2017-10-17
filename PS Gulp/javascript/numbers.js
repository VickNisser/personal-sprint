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