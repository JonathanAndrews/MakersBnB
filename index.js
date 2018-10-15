const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').load();
// Our DB Models:
const User = require('./src/user');
const Listing = require('./src/listing');

// Sets up Express App and Port:
const app = express();
const PORT = process.env.PORT || 3000;

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
  const newUser = new User({
    email: req.body['sign-up-email'],
    password: req.body['sign-up-password'],
  });
  newUser.save().then((docs) => {
    req.session.userID = docs.id;
    req.session.email = req.body['sign-up-email'];
    res.redirect('/dashboard');
  });
});

app.get('/dashboard', (req, res) => {
  // get all listings from db
  const currentUser = req.session.email;
  Listing.find({}, (err, allListings) => {
    if (err) {
      console.log(err);
    } else {
      res.render('dashboard', { listings: allListings, user: currentUser });
    }
  });
});

// this takes you to New Space form
app.get('/listings/new', (req, res) => {
  res.render('insert_space');
});

// this saves a new space to the database
app.post('/listings/new', (req, res) => {
  const listing = new Listing({
    name: req.body.name,
    description: req.body.description,
    imageURL: req.body.imageURL,
    price: req.body.price,
    ownerID: req.session.userID,
  });
  listing.save().then(
    (docs) => {
      console.log('listing saved', docs);
      res.redirect('/dashboard');
    },
    (e) => {
      console.log('unable to save');
    },
  );
});

app.get('/listings/requests', (req, res) => {
  Listing.find({}, (err, allListings) => {
    if (err) {
      console.log(err);
    } else {
      res.render('bookingRequests', { listings: allListings });
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

app.post('/login', (req, res) => {
  User.findOne({ email: req.body.loginemail, password: req.body.loginpassword }, (err, user) => {
    if (user === null) {
      res.send('Incorrect Email or password! <a href="/">go back</a>');
    } else {
      req.session.email = user.email;
      req.session.userID = user.id;
      res.redirect('/dashboard');
    }
  });
});

// This route will allow us to book a space
app.get('/listing/:id/book', (req, res) => {
  Listing.findById(req.params.id, (err, listing) => {
    if (err) {
      console.log(err);
    } else {
      res.render('bookingPage', { listing });
    }
  });
});

// This route stores the date of the Booking request
app.post('/listing/:id/book', (req, res) => {
  Listing.findById(req.params.id, (err, listing) => {
    if (err) {
      console.log(err);
    } else {
      const requestDate = req.body.dateBooking;
      listing.bookingRequest.push(requestDate);
      listing.save();
      res.redirect('/dashboard');
    }
  });
});

app.get('/approve', (req, res) => {
  res.send('<h1>Approved Booking</h1>');
});

app.get('/deny', (req, res) => {
  res.send('<h1>Denied Booking</h1>');
});

// Connecting to our localhost
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
