const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User visits log in page', () => {
  const browser = new Browser();

  beforeEach((done) => {
    browser.visit('/', done);
  });

  describe('logs in and  goes to Add space form', () => {
    beforeEach((done) => {
      browser.fill('loginemail', "ayo@email.com")
      browser.fill('loginpassword', "climbing");
      browser.pressButton('Login')
      browser.pressButton('Add', done)
    });

    it('should be successful', () => {
      browser.assert.success();
    })

    it('should load Add Space form', () => {
      browser.assert.text('#title', "Please Input Info");
    });
  })
})
