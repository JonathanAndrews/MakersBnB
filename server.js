const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/testDbMakersBNB',
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
