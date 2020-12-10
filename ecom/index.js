const express = require('express');
const usersRepo = require('./repositories/users');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.send('Home');
});

app.get('/admin/signup', (req, res) => {
	res.render('signup');
});

app.post('/admin/signup', async (req, res) => {
	const { email, password, passwordConfirmation } = req.body;
	const existingUser = await usersRepo.getOneBy({ email });
	if (existingUser) {
		return res.send('Email in use');
	}
	if (password !== passwordConfirmation) {
		return res.send('Passwords must match');
	}
	res.send('Posted');
});

app.get('/admin/signin', (req, res) => {
	res.send('Home');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
