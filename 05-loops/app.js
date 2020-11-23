// For loop
for (let i = 0; i < 5; i++) {
	console.log(i);
}

const examScores = [ 98, 77, 84, 91, 57, 66 ];
for (let i = 0; i < examScores.length; i++) {
	console.log(i, examScores[i]);
}

const myStudents = [
	{
		firstName: 'Zeus',
		grade: 86
	},
	{
		firstName: 'Artemis',
		grade: 97
	},
	{
		firstName: 'Hera',
		grade: 72
	},
	{
		firstName: 'Apollo',
		grade: 90
	}
];

for (let i = 0; i < myStudents.length; i++) {
	console.log(`${myStudents[i].firstName} scored ${myStudents[i].grade}`);
}

// While loop
let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}

// For of loop
let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];

for (let sub of subreddits) {
	console.log(sub);
}

// For in loop
const jeopardyWinnings = {
	regularPlay: 2522700,
	watsonChallenge: 300000,
	tournamentOfChampions: 500000,
	battleOfTheDecades: 100000
};

for (let game in jeopardyWinnings) {
	console.log(jeopardyWinnings[game]);
}
