const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User visits home page', () => {
  const browser = new Browser();

  beforeEach((done) => {
    browser.visit('/', done);
  });

  it("should say 'Welcome to LocalHost!'", () => {
    browser.assert.text('body', 'Welcome to LocalHost!');
  });

  describe('submits sign up form', () => {
    beforeEach((done) => {
<<<<<<< HEAD
      browser.fill('sign-up-email', 'jon@email.com');
      browser.fill('sign-up-password', 'parkrunlover');
=======
      browser.fill('email', 'jon@email.com');
      browser.fill('password', 'parkrunlover');
>>>>>>> master
      browser.pressButton('Sign Up', done);
    });

    it('should be successful', () => {
      browser.assert.success();
    });

    it('should welcome user', () => {
<<<<<<< HEAD
      browser.assert.text('h1', 'Hello jon@email.com');
=======
      browser.assert.text('body', 'Hello jon@email.com');
>>>>>>> master
    });
  });
});
