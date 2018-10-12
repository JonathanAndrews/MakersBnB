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
        browser.pressButton('Add New Space', done);
      });

      describe('fills in New Space form', () => {
        beforeEach((done) => {
          browser.fill('name', '21 Woodfarrs');
          browser.fill('description', 'Two bed house');
          browser.fill('price', 340);
          browser.fill('start-date', '11/11/2018');
          browser.fill('end-date', '12/12/2018');
          browser.pressButton('Submit', done);
        });

        describe('click on booking to check space details', () => {
          beforeEach((done) => {
            browser.clickLink('.listing-6-link', done);
          });

          describe('click on book for a night', () => {
            beforeEach((done) => {
              browser.pressButton('Book for a Night', done);
            });
          });
        });
      });
    });
  });
});
