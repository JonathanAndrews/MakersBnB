const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User visits dashboard', () => {
  const browser = new Browser();

  beforeEach((done) => {
    browser.visit('/dashboard', done);
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
        browser.assert.success();
      });
    });
  });
});
