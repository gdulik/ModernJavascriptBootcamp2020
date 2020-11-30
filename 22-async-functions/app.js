// function getData() {
// 	const data = axios.get('https://swapi.dev/api/planets');
// 	console.log(data);
// }

async function greet() {
	return 'Hello';
}
greet().then((val) => {
	console.log('Promise resolved with:', val);
});

async function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw 'X and Y must be numbers';
	}
	return x + y;
}
add('e', 4)
	.then((val) => {
		console.log('Promise resolved with:', val);
	})
	.catch((e) => {
		console.log('Error:', e);
	});

// const getPlanets = async () => {
// 	const res = await axios.get('https://swapi.dev/api/planeats');
// 	console.log(res.data);
// };
// getPlanets().catch((err) => {
// 	console.log('In catch:', err);
// });

const getPlanets = async () => {
	try {
		const res = await axios.get('https://swapi.dev/api/planeats');
		console.log(res.data);
	} catch (e) {
		console.log('In catch:', e);
	}
};
getPlanets();

const moveXPromise = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

const btn = document.querySelector('button');
async function animateRight(el, amt) {
	await moveXPromise(el, amt, 1000);
	await moveXPromise(el, amt, 1000);
	await moveXPromise(el, amt, 1000);
	await moveXPromise(el, amt, 1000);
	await moveXPromise(el, amt, 1000);
	moveXPromise(el, amt, 1000);
}

// animateRight(btn, 100).catch((err) => {
// 	console.log('Error');
// 	animateRight(btn, -100);
// });

// ********************
// SEQUENTIAL REQUESTS
// ********************
// async function get3Pokemon() {
// 	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
// 	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
// 	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
// 	console.log(poke1.data.name);
// 	console.log(poke2.data.name);
// 	console.log(poke3.data.name);
// }
// get3Pokemon();

// ********************
// PARALLEL REQUESTS
// ********************
// async function get3Pokemon() {
// 	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
// 	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
// 	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
// 	const poke1 = await prom1;
// 	const poke2 = await prom2;
// 	const poke3 = await prom3;
// 	console.log(poke1.data.name);
// 	console.log(poke2.data.name);
// 	console.log(poke3.data.name);
// }
// get3Pokemon();

// ********************
// PARALLEL REQUESTS with Promise.all
// ********************
async function get3Pokemon() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	const results = await Promise.all([ prom1, prom2, prom3 ]);
	printPokemon(results);
}

function printPokemon(results) {
	for (let poke of results) {
		console.log(poke.data.name);
	}
}

get3Pokemon();
