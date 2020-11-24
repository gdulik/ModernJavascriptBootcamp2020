// spread
const colors = [ 'red', 'orange', 'yellow', 'green' ];
function giveMeFour(a, b, c, d) {
	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	console.log('d', d);
}
giveMeFour(...colors);

const num1 = [ 1, 2, 3 ];
const num2 = [ 4, 5, 6 ];
const nums = [ ...num1, ...num2 ];

console.log('abcdefg'.split(''));
console.log([ ...'abcdefg' ]);

// rest
function sum(...nums) {
	return nums.reduce((total, num) => {
		return total + num;
	});
}

const multiply = (...nums) => nums.reduce((total, num) => total * num);

// destructuring
const raceResults = [ 'Eliud', 'Feyisa', 'Galen', 'Ghirmay', 'Alphonce', 'Jared' ];
const [ gold, silver, bronze ] = raceResults;
const [ winner, ...others ] = raceResults;

const runner = {
	first: 'Eliud',
	last: 'Kipchoge',
	country: 'Kenya',
	title: 'Elder of the Order of the Golden Heart of Kenya'
};
const { first, last } = runner;

const fullName = ({ first, last }) => {
	console.log(`${first} ${last}`);
};

fullName(runner);
