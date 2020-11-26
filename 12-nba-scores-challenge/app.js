const warriorsGames = [
	{
		awayTeam: {
			team: 'Golden State',
			points: 119,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 106,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 105,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 127,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 126,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 85,
			isWinner: false
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 92,
			isWinner: false
		},
		awayTeam: {
			team: 'Houston',
			points: 95,
			isWinner: true
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 94,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 98,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 115,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 86,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 101,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 92,
			isWinner: false
		}
	}
];

const makeChart = (games, targetTeam) => {
	const newUl = document.createElement('ul');
	for (let game of games) {
		const newLi = document.createElement('li');
		newLi.innerHTML = getScoreLine(game);
		newLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
		newUl.append(newLi);
	}
	return newUl;
};

const getScoreLine = ({ awayTeam, homeTeam }) => {
	const { team: aTeam, points: aPoints } = awayTeam;
	const { team: hTeam, points: hPoints } = homeTeam;
	const teamNames = `${aTeam} @ ${hTeam}`;
	let scoreLine;
	if (aPoints > hPoints) {
		scoreLine = `<b>${aPoints}</b>-${hPoints}`;
	} else {
		scoreLine = `${aPoints}-<b>${hPoints}</b>`;
	}
	return `${teamNames} ${scoreLine}`;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
	const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
	return target.isWinner;
};

const gsSection = document.querySelector('#gs');
const gsChart = makeChart(warriorsGames, 'Golden State');
gsSection.append(gsChart);

const hrSection = document.querySelector('#hr');
const hrChart = makeChart(warriorsGames, 'Houston');
hrSection.append(hrChart);
