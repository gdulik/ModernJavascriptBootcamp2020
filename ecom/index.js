const express = require('express');
const usersRepo = require('./repositories/users');
const cookieSession = require('cookie-session');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: [ 'lkhas45sbj5hzpz32i4' ]
	})
);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.send('Home');
});

app.get('/admin/signup', (req, res) => {
	res.render('signup', { req });
});

app.post('/admin/signup', async (req, res) => {
	const { email, password, passwordConfirmation } = req.body;
	const existingUser = await usersRepo.getOneBy({ email });
	if (existingUser) {
		return res.send('Email already in use');
	}
	if (password !== passwordConfirmation) {
		return res.send('Passwords must match');
	}

	const user = await usersRepo.create({ email, password });
	req.session.userId = user.id;

	res.send('Signed up');
});

app.get('/admin/signin', (req, res) => {
	res.render('signin');
});

app.post('/admin/signin', async (req, res) => {
	const { email, password } = req.body;
	const user = await usersRepo.getOneBy({ email });
	if (!user) {
		return res.send('Email not in use');
	}
	const validPassword = await usersRepo.comparePasswords(user.password, password);
	if (!validPassword) {
		return res.send('Invalid password');
	}
	req.session.userId = user.id;
	res.send('Signed in');
});

app.get('/admin/signout', (req, res) => {
	req.session = null;
	res.redirect('/admin/signup');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
