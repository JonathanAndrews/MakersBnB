const mongoose = require('mongoose');
require('dotenv').load();

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
    process.env.DB_HOST
  }:51348/localhostdb`,
  { useNewUrlParser: true },
);

const db = mongoose.connection;

db.once('open', () => {
  console.log('connected');
  const userSchema = new mongoose.Schema({
    email: String,
    password: String,
  });
  const User = mongoose.model('User', userSchema);
  const listingSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
  });
  const Listing = mongoose.model('Listing', listingSchema);
  const dummyUser = new User({ email: 'alex@mail.com', password: 'dogareskewl' });
  const dummyListing = new Listing({
    name: 'Westminster Flat',
    description: 'Best view of big ben',
    price: 100,
  });

  dummyUser.save();
  dummyListing.save();
});
