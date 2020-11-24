// Example 1 - function
const rollDie = function() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
};
rollDie();

// Example 2 - default value of parametr
function greet(nickname = 'default') {
	console.log(`Hello, ${nickname}`);
}
greet('Tim');

// Example 3 - returning value
function sum(x, y) {
	return x + y;
}
console.log(sum(2, 3));

// Challenge 1
const isValidPassword = (password, username) => {
	if (password.length >= 8 && !password.includes(' ') && !password.includes(username)) return true;
	return false;
};

// Challenge 2
const avg = (nums) => {
	let total = 0;
	for (let num of nums) {
		total += num;
	}
	return total / nums.length;
};

// Challenge 3
const isPangram = (sentence) => {
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!sentence.toLowerCase().includes(char)) return false;
	}
	return true;
};

// Challenge 4
const getCard = () => {
	const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	const randValue = values[Math.floor(Math.random() * values.length)];
	const randSuit = suits[Math.floor(Math.random() * suits.length)];
	return {
		value: randValue,
		suit: randSuit
	};
};

// Example 4 - function as return
function makeBetweenFunc(x, y) {
	return function(num) {
		return num >= x && num <= y;
	};
}
const isInNineties = makeBetweenFunc(1990, 1999);
isInNineties(1993);

// Example 5 - callback functions
setTimeout(function() {
	alert('Hello');
}, 2000);
