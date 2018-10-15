const mongoose = require('mongoose');

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
    imageURL: String,
    price: Number,
    ownerID: Number,
    startDate: String,
    endDate: String,
    bookingRequest: [String],
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
    imageURL:
      'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.5stardesigns.co.uk%2F5star%2Fcounty%2Fswapmeet19%2Fsm19-396%2F1.jpg&f=1',
    price: 100,
    ownerID: 25,
    startDate: '2019-07-05',
    endDate: '2019-10-04',
    bookingRequest: [],
  });
  const dummyListing2 = new Listing({
    name: 'Camden loft',
    description: 'No windows, so room has a lot of birds.',
    imageURL: 'https://s-ec.bstatic.com/images/hotel/max1024x768/914/91458017.jpg',
    price: 20,
    ownerID: 26,
    startDate: '2019-07-05',
    endDate: '2019-10-04',
  });
  const dummyListing3 = new Listing({
    name: 'Hampstead Masion',
    description: 'Great views of the heath',
    imageURL:
      'https://www.swindonadvertiser.co.uk/resources/images/6312562/?type=responsive-gallery-fullscreen',
    price: 200000,
    ownerID: 27,
    startDate: '2019-07-05',
    endDate: '2019-10-04',
  });
  const dummyListing4 = new Listing({
    name: 'Brixton Terrace',
    description: 'Recently gentified area',
    imageURL: 'https://www.hatsandcaps.co.uk/images/products/large/179924.jpg',
    price: 70,
    ownerID: 28,
    startDate: '2019-07-05',
    endDate: '2019-10-04',
  });
  const dummyListing5 = new Listing({
    name: 'Makers',
    description: 'Full of people struggling with mongoose...',
    imageURL:
      'https://content.jdmagicbox.com/comp/shivpuri/e1/9999p7497.7497.120205165456.y1e1/catalogue/makers-academy-coaching-institute-shivpuri-ho-shivpuri-institutes-wo0mq0g.jpg',
    price: 135,
    ownerID: 29,
    startDate: '2019-07-05',
    endDate: '2019-10-04',
  });

  User.deleteMany({}).exec();
  Listing.deleteMany({}).exec();

  const userArray = [dummyUser, dummyUser2, dummyUser3, dummyUser4, dummyUser5];
  const listingArray = [dummyListing, dummyListing2, dummyListing3, dummyListing4, dummyListing5];
  User.insertMany(
    userArray,
    (error, docs) => {
      console.log('Users saved', docs);
      Listing.insertMany(
        listingArray,
        (error, docs) => {
          console.log('Listings saved', docs);
          db.close();
        },
        (e) => {
          console.log('unable to save listing');
        },
      );
    },
    (e) => {
      console.log('unable to save users');
    },
  );

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
