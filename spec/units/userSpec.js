const User = require('../../src/user');

describe('User', () => {
  it('should be able to find a user', () => {
    User.find({}, (err, users) => {
      expect(users).toEqual('mathilda@email.com');
    });
  });
});
