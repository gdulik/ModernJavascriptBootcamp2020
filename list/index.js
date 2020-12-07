#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

// METHOD #1
// const lstat = (filename) => {
// 	return new Promise((resolve, reject) => {
// 		fs.lstat(filename, (err, stats) => {
// 			if (err) {
// 				reject(err);
// 			}
// 			resolve(stats);
// 		});
// 	});
// };

// METHOD #2
// const util = require('util');
// const lstat = util.promisify(fs.lstat);

// METHOD #3
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
	if (err) {
		console.log(err);
	}

	// RIGHT #2 with METHOD #1, #2 or #3
	const statPromises = filenames.map((filename) => {
		return lstat(path.join(targetDir, filename));
	});
	const allStats = await Promise.all(statPromises);
	allStats.forEach((stats, index) => {
		if (stats.isFile()) {
			console.log(filenames[index]);
		} else {
			console.log(chalk.black.bgGreen(filenames[index]));
		}
	});

	// RIGHT #1 with METHOD #1, #2 or #3
	// for (let filename of filenames) {
	// 	try {
	// 		const stats = await lstat(filename);
	// 		console.log(filename, stats.isFile());
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

	// WRONG #1
	// for (let filename of filenames) {
	// 	fs.lstat(filename, (err, stats) => {
	//     if(err) {
	//       console.log(err);
	//     }
	//     console.log(filename, stats.isFile());
	// 	});
	// }

	// KINDA WRONG #2
	// const allStats = Array(filenames.length).fill(null);
	// filenames.forEach((filename, index) => {
	// 	fs.lstat(filename, (err, stats) => {
	// 		if (err) {
	// 			console.log(err);
	// 		}
	// 		allStats[index] = stats;
	// 		const ready = allStats.every((stats) => {
	// 			return stats;
	// 		});
	// 		if (ready) {
	// 			allStats.forEach((stats, index) => {
	// 				console.log(filenames[index], stats.isFile());
	// 			});
	// 		}
	// 	});
	// });
});
