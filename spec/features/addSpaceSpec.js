const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User visits sign-up page', () => {
  const browser = new Browser();

  beforeEach((done) => {
    browser.visit('/', done);
  });

  describe('submits sign up form', () => {
    beforeEach((done) => {
      browser.fill('sign-up-email', 'jon@email.com');
      browser.fill('sign-up-password', 'parkrunlover');
      browser.pressButton('Sign Up', done);
    });

    describe('click Add space button', () => {
      beforeEach((done) => {
        browser.pressButton('Add New Space', done)
      });

      it('should be successful', () => {
        browser.assert.success();
      });

      it('should load Add Space form', () => {
        browser.assert.text('h1', "Please Input Info:");
      });

      describe('fills in New Space form', () => {
        beforeEach((done) => {
          browser.fill('name', '21 Woodfarrs');
          browser.fill('description', 'Two bed house');
          browser.fill('price', 340);
          browser.pressButton('Submit', done);
        });

        it('should be successful', () => {
          browser.assert.success()
        });

        it('should show up on dashboard', () => {
          browser.assert.text('.listing-6-name', '21 Woodfarrs');
        });
      });
    });
  });
});
