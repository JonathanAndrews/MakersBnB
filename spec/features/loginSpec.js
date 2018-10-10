const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User visits log in page', () => {
  const browser = new Browser();

  beforeEach((done) => {
    browser.visit('/', done);
  });

  describe('fills in the login form', () => {
    beforeEach((done) => {
      browser.fill('loginemail', "ayo@email.com")
      browser.fill('loginpassword', "climbing");
      browser.pressButton('Login', done)
    });

    it('should be successful', () => {
      browser.assert.success();
    });

    it('should welcome user', () => {
      browser.assert.text('#greeting', "Hello ayo@email.com");
    });
  });
})
