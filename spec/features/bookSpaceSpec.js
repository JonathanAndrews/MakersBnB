const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User will book a space', () => {
  const browser = new Browser();

  beforeEach((done) => {
    browser.visit('/', done);
  });

  describe('and fills in the login form and press book now', () => {
    beforeEach((done) => {
      browser.fill('loginemail', 'ayo@email.com');
      browser.fill('loginpassword', 'climbing');
      browser.pressButton('Login', done);
    });

    describe('and should press book now', () => {
      beforeEach((done) => {
        browser.clickLink('Book Now', done);
      });

      describe('Book for a Night', () => {
        beforeEach((done) => {
          browser.pressButton('Book for a Night', done);
        });

        it('should be successful', () => {
          browser.assert.success();
        });

        it('should work', () => {
          browser.assert.text('h1', 'Booking: Westminster Flat');
        });

        describe('Fill in the date', () => {
          beforeEach((done) => {
            browser.fill('dateBooking', '11/11/2011');
            browser.pressButton('Submit', done);
          });

          it('should be successful', () => {
            browser.assert.success();
          });

          it('should display the confirmation', () => {
            browser.assert.text('span', 'Nov 11, 2011');
          });
        });
      });
    });
  });
});
