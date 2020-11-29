const fetchNextPlanets = (url = 'https://swapi.dev/api/planets') => {
	return axios.get(url);
};

const printPlanets = ({ data }) => {
	console.log('Loaded 10 more planets...');
	for (let planet of data.results) {
		console.log(planet.name);
	}
	// return Promise.resolve(data.next);
	return Promise.resolve(data.next);
};

fetchNextPlanets().then(printPlanets).then(fetchNextPlanets).then(printPlanets).catch((err) => {
	console.log('Error', err);
});
