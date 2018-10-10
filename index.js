const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;

// Connecting to our Public folder
app.use(express.static('public'));

// Setting up Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'this-is-secretive-shhhh' }));

// Setting our View Engine
app.set('view engine', 'ejs');

// Our root Page
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/signup', (req, res) => {
  req.session.email = req.body['sign-up-email'];
  req.session.password = req.body['sign-up-password'];
  res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
  res.locals.email = req.session.email;
  res.render('dashboard');
});

app.post('/login', (req, res) => {
  req.session.email = req.body['loginemail']
  req.session.password = req.body['loginpassword']
  res.redirect('/dashboard');
});

// Connecting to our localhost
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
