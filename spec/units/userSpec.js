const User = require('../../src/user');

describe('User', () => {
  it('should be able to find a user', () => {
    console.log('1');
    const recoveredUser = User.find({ email: 'alex@mail.com' }, (err, users) => {
      console.log('4');
      return users;
    });
    console.log('2');
    expect(recoveredUser.email).toEqual('jon@mail.com');
    console.log('3');
  });
});
