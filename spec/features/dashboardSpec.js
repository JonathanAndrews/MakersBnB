const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User goes on Dashboard', () => {
  const browser = new Browser();

  beforeEach((done) => {
    browser.visit('/dashboard', done);
  });

  describe('User can click on listing', () => {
    beforeEach((done) => {
      browser.clickLink('Book Now', done);
    });

    it('should say Listing Name', () => {
      browser.assert.text('h1', 'Westminster Flat');
    });
  });
});
