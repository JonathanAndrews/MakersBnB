const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User visits home page', () => {
  const browser = new Browser();

  it('should see hello world', () => {
    browser.visit('/', () => {
      browser.assert.text('body', 'Hello World!');
    });
  });
});
