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

const getPlanets = async () => {
	const res = await axios.get('https://swapi.dev/api/planets');
	console.log(res.data);
};
getPlanets();
