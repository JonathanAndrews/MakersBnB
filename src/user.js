const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
    process.env.DB_HOST
  }:51348/localhostdb`,
  { useNewUrlParser: true },
);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.add({ username: String });

userSchema.statics.findByEmail = function (email, cb) {
  return this.find({ email: new RegExp(email, 'i') }, cb);
};

const User = mongoose.model('User', userSchema);

// User.find({ email: 'alex@mail.com' }, (err, users) => {
//   if (err) return console.error(err);
//   console.log(users);
//   db.close();
// });

// User.findByEmail('ollie', (err, users) => {
//   if (err) return console.error(err);
//   db.close();
//   console.log(users);
// });

module.exports = User;
