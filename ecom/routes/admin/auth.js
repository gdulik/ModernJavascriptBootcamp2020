const express = require('express');
const usersRepo = require('../../repositories/users');

const router = express.Router();

router
	.route('/signup')
	.get((req, res) => {
		res.render('admin/auth/signup', { req });
	})
	.post(async (req, res) => {
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

router
	.route('/signin')
	.get((req, res) => {
		res.render('admin/auth/signin');
	})
	.post(async (req, res) => {
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

router.route('/signout').get((req, res) => {
	req.session = null;
	res.redirect('/admin/signup');
});

module.exports = router;
