// .forEach()
const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

numbers.forEach(function(num) {
	console.log(num);
});

function printDouble(n) {
	console.log(n * 2);
}

numbers.forEach(printDouble);

// .map()
const doubles = numbers.map(function(num) {
	return num * 2;
});

const numObject = numbers.map(function(n) {
	return {
		value: n,
		isEven: n % 2 === 0
	};
});

const words = [ 'asap', 'byob', 'rsvp', 'diy' ];

const abbrevs = words.map(function(word) {
	return word.toUpperCase().split('').join('.');
});

// .find()
const movies = [ 'The Fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds' ];

const movie = movies.find((movie) => {
	return movie.includes('Mrs');
});

// .filter()
const even = numbers.filter((n) => n % 2 === 0);

// .every()
const fourLettersEvery = words.every((word) => {
	return word.length === 4;
});

// .some()
const fourLettersSome = words.some((word) => {
	return word.length === 4;
});

// .sort()
const prices = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];

const pricesAsc = prices.slice().sort((a, b) => a - b);
const pricesDesc = prices.slice().sort((a, b) => b - a);

// .reduce()
const total = prices.reduce((total, price) => total + price);

const nums = [ 3, 4, 5, 6, 7 ];
const product = nums.reduce((product, num) => product * num);

const pricesMax = prices.reduce((max, price) => {
	if (price > max) return price;
	return max;
});

const pricesMin = prices.reduce((min, price) => Math.min(min, price));

const votes = [ 'y', 'n', 'y', 'y', 'n', 'n', 'y', 'y', 'n', 'y', 'y', 'n', 'y' ];

const results = votes.reduce((tally, val) => {
	// if (tally[val]) {
	// 	tally[val]++;
	// } else {
	// 	tally[val] = 1;
	// }
	tally[val] = (tally[val] || 0) + 1;
	return tally;
}, {});
