const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.send('Home');
});

app.get('/admin/signup', (req, res) => {
	res.render('signup');
});

app.post('/admin/signup', (req, res) => {
	console.log(req.body);
	res.send('Posted');
});

app.get('/admin/signin', (req, res) => {
	res.send('Home');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
