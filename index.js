const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const Listing = require('./src/listing');

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
  // get all listings from db
  Listing.find({}, (err, allListings) => {
    if (err) {
      console.log(err);
    } else {
      res.locals.email = req.session.email;
      res.render('dashboard', { listings: allListings });
    }
  });
});
app.post('/login', (req, res) => {
  req.session.email = req.body['loginemail']
  req.session.password = req.body['loginpassword']
  res.redirect('/dashboard');
});

app.get('/listings/new', (req, res) => {
  res.render('insert_space');
});

app.post('/listings/new', (req, res) => {
  req.session.name = req.body['name']
  req.session.description = req.body['description']
  req.session.price = req.body['price']
  Listing.

app.get('/listing/:id', (req, res) => {
  const listingId = req.params.id;
  Listing.findById(listingId, (err, listing) => {
    if (err) {
      console.log(err);
    } else {
      res.render('listing', { listing });
    }
  });
});

app.get('/listing/:id', (req, res) => {
  const listingId = req.params.id;
  Listing.findById(listingId, (err, listing) => {
    if (err) {
      console.log(err);
    } else {
      res.render('listing', { listing });
    }
  });
});


// app.post('/login', (req, res) => {});

// Connecting to our localhost
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// jjjdjdjdjjdjdjdjdjdjdjdjdjdjdj
