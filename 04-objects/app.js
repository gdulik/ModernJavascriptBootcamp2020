const fitbitData = {
	totalSteps: 308727,
	totalMiles: 211.7,
	avgCalorieBurn: 5755,
	workoutThisWeek: '5 of 7',
	avgGoodSleep: '2:13'
};

console.log(fitbitData.totalSteps);
console.log(fitbitData['totalSteps']);

fitbitData.heartStillBeating = true;
fitbitData.totalSteps += 100;

const shoppingCart = [
	{
		product: 'Jenga Classic',
		price: 6.88,
		quantity: 1
	},
	{
		product: 'Echo Dot',
		price: 3.99,
		quantity: 2
	}
];
