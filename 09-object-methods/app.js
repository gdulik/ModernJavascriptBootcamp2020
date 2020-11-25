// shorthand object properties
const getStats = (arr) => {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const sum = arr.reduce((sum, num) => sum + num);
	const avg = sum / arr.length;
	return { max, min, sum, avg };
};

const reviews = [ 4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5 ];

const stats = getStats(reviews);

// computed properties
const role = 'host';
const name = 'Jools Holland';
const role2 = 'director';
const name2 = 'James Cameron';

// const team = {};
// team[role] = name;
// team[role2] = name2;

const team = {
	[role]: name,
	[role2]: name2
};

// function addProp(obj, k, v) {
// 	const copy = { ...obj };
// 	copy[k] = v;
// 	return copy;
// }

const addProp = (obj, k, v) => {
	return { ...obj, [k]: v };
};

const res = addProp(team, 'happy', ':)');

// methods
const math = {
	add: function(x, y) {
		return x + y;
	},
	multiply: (x, y) => x * y,
	divide(x, y) {
		return x / y;
	}
};

// this keyword
const person = {
	first: 'Cherilyn',
	last: 'Sarkisian',
	nickName: 'Cher',
	fullName() {
		const { first, last, nickName } = this;
		return `${first} ${last} AKA ${nickName}`;
	},
	printBio() {
		return `${this.fullName()} is a person`;
	}
};

// Example
const annoyer = {
	phrases: [ 'literally', 'cray cray', "I can't even", 'Totes!', 'YOLO', "Can't stop, Won't stop" ],
	pickPhrase() {
		return this.phrases[Math.floor(Math.random() * this.phrases.length)];
	},
	start() {
		this.timerId = setInterval(() => {
			console.log(this.pickPhrase());
		}, 3000);
	},
	stop() {
		clearInterval(this.timerId);
	}
};
