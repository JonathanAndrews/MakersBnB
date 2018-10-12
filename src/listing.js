const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/testDbMakersBNB',
  { useNewUrlParser: true },
);

const listingSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageURL: String,
  price: Number,
  ownerID: String,
  startDate: String,
  endDate: String,
  bookingRequest: [String],
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;

// Listing.find({}, (err, users) => {
//   if (err) return console.error(err);
//   console.log(users);
//   // db.close();
// });
