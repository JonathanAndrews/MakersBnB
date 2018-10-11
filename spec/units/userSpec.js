const User = require('../../src/user');

describe('User', () => {
  it('should be able to find a user', () => {
    User.find({}, (err, users) => {
      const user = users;
      expect(user).toEqual('mathilda@email.com');
    });
  });

  it('should be able to add a user', () => {});
});
