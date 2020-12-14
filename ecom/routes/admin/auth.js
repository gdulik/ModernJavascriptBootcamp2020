const express = require('express');
const { body, validationResult } = require('express-validator');

const usersRepo = require('../../repositories/users');
const {
	requireEmail,
	requirePassword,
	requirePasswordConfirmation,
	requireEmailExists,
	requireValidPasswordForUser
} = require('./validators');

const router = express.Router();

router
	.route('/signup')
	.get((req, res) => {
		res.render('admin/auth/signup', { req });
	})
	.post(
		[ requireEmail, requirePassword, requirePasswordConfirmation ],
		async (req, res) => {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.render('admin/auth/signup', { req, errors });
			}

			const { email, password, passwordConfirmation } = req.body;
			const user = await usersRepo.create({ email, password });
			req.session.userId = user.id;

			res.send('Signed up');
		}
	);

router
	.route('/signin')
	.get((req, res) => {
		res.render('admin/auth/signin');
	})
	.post(
		[ requireEmailExists, requireValidPasswordForUser ],
		async (req, res) => {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.render('admin/auth/signin', { errors });
			}

			const { email } = req.body;
			const user = await usersRepo.getOneBy({ email });

			req.session.userId = user.id;
			res.send('Signed in');
		}
	);

router.route('/signout').get((req, res) => {
	req.session = null;
	res.redirect('/admin/signup');
});

module.exports = router;
