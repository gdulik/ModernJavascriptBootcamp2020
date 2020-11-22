// Example 1
if (1 === 1) {
	console.log("It's true!");
}

// Example 2
let rating = 3;

if (rating === 3) {
	console.log('You are a superstar!');
}

// Example 3 - if
let num = 37;

if (num % 2) {
	console.log('Odd number!');
}

// Example 4 - if elseif else
num = 36;

if (num % 2) {
	console.log('Odd number!');
} else if (!(num % 2)) {
	console.log('Even number!');
} else {
	console.log('There was a mistake!');
}

// Example 5 - if else
let password = 'chicken Gal';

if (password.length >= 8 && password.indexOf(' ') === -1) {
	console.log('Valid password');
} else {
	console.log('Invalid password');
}

// Example 6 - switch
let day = 2;
// if (day === 1) {
// 	console.log('Monday');
// } else if (day === 2) {
// 	console.log('Tuesday');
// } else {
// 	console.log('Invalid day');
// }

switch (day) {
	case 1:
		console.log('Monday');
		break;
	case 2:
		console.log('Tuesday');
		break;
	default:
		console.log('Invalid day');
}

// Example 7 - ternary operator
num = 7;
// if (num === 7) {
// 	console.log('Lucky!');
// } else {
// 	console.log('Bad!');
// }

num === 7 ? console.log('Lucky!') : console.log('Bad!');
