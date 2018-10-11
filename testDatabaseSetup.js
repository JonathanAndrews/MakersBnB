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

  const dummyUser = new User({ email: 'alex@email.com', password: 'dogareskewl' });
  const dummyUser2 = new User({ email: 'jonathan@email.com', password: 'password' });
  const dummyUser3 = new User({ email: 'ayo@email.com', password: 'climbing' });
  const dummyUser4 = new User({ email: 'oliver@mail.com', password: 'yoga' });
  const dummyUser5 = new User({ email: 'teamMember5@mail.com', password: 'airbnb' });

  const dummyListing = new Listing({
    name: 'Westminster Flat',
    description: 'Best view of big ben',
    price: 100,
  });
  const dummyListing2 = new Listing({
    name: 'Camden loft',
    description: 'No windows, so room has a lot of birds.',
    price: 20,
  });
  const dummyListing3 = new Listing({
    name: 'Hampstead Masion',
    description: 'Great views of the heath',
    price: 200000,
  });
  const dummyListing4 = new Listing({
    name: 'Brixton Terrace',
    description: 'Recently gentified area',
    price: 70,
  });
  const dummyListing5 = new Listing({
    name: 'Makers',
    description: 'Full of people struggling with mongoose...',
    price: 135,
  });

  User.deleteMany({}).exec();
  Listing.deleteMany({}).exec();

  var user_array = [ dummyUser, dummyUser2, dummyUser3, dummyUser4, dummyUser5]
  var listing_array = [dummyListing, dummyListing2, dummyListing3, dummyListing4, dummyListing5];
  User.insertMany(user_array, function(error, docs) {
    console.log('Users saved',docs);
    Listing.insertMany(listing_array, function(error, docs) {
      console.log('Listings saved',docs);
      db.close();
    },(e)=>{
      console.log('unable to save listing');
    });
  },(e)=>{
    console.log('unable to save users');
  });

  // dummyUser.save();
  // dummyUser2.save();
  // dummyUser3.save();
  // dummyUser4.save();
  // dummyUser5.save();
  // dummyListing.save();
  // dummyListing2.save();
  // dummyListing3.save();
  // dummyListing4.save();
  // dummyListing5.save().then((docs)=>{
  //   console.log('listing saved',docs);
  //   db.close();
  // },(e)=>{
  //   console.log('unable to save');
  // });
});
