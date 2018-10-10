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
});
