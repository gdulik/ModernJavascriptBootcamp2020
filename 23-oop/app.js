// String.prototype.yell = function() {
// 	return `OMG!!! ${this.toUpperCase()}!!! AGHGHH!`;
// };

// const name = 'Monty';
// name.yell();

function makeColor(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r},${g},${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
	};
	return color;
}

const firstColor = makeColor(35, 255, 150);
console.log(firstColor.rgb());
console.log(firstColor.hex());

// CONSTRUCTOR FUNCTION
// function Color(r, g, b) {
// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// }

// Color.prototype.rgb = function() {
// 	const { r, g, b } = this;
// 	return `rgb(${r},${g},${b})`;
// };

// Color.prototype.hex = function() {
// 	const { r, g, b } = this;
// 	return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
// };

// Color.prototype.rgba = function(a = 1.0) {
// 	const { r, g, b } = this;
// 	return `rgba(${r},${g},${b},${a})`;
// };

// const navy = new Color(53, 83, 10);

// CLASSES
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
		this.calcHSL();
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r},${g},${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	hex() {
		const { r, g, b } = this;
		return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()},${a})`;
	}
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h},${s}%,${l}%)`;
	}
	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue},${s}%,${l}%)`;
	}
	fullySaturated() {
		const { h, l } = this;
		return `hsl(${h},100%,${l}%)`;
	}
	calcHSL() {
		let { r, g, b } = this;
		r /= 255;
		g /= 255;
		b /= 255;
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if ((cmax = r)) h = ((g - b) / delta) % 6;
		else if ((cmax = g)) h = (b - r) / delta + 2;
		else h = (r - g) / delta + 4;
		h = Math.round(h * 60);
		if (h < 0) h += 360;
		l = (cmax + cmin) / 2;
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const color1 = new Color(255, 67, 89, 'tomato');
const color2 = new Color(255, 255, 255, 'white');

class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

class Cat extends Pet {
	constructor(name, age, livesLeft = 9) {
		super(name, age);
		this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEOWWW!!';
	}
}

class Dog extends Pet {
	woof() {
		return 'WOOOF!!';
	}
	eat() {
		return `${this.name} scarfs his food!`;
	}
}

const monty = new Cat('Monty', 9);
const wyatt = new Dog('Wyatt', 12);
