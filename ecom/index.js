const express = require('express');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: [ 'lkhas45sbj5hzpz32i4' ]
	})
);
app.use('/admin', authRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.send('Home');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
