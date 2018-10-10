const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User visits log in page', () => {
  const browser = new Browser();

  before(function)

  it('loads the login page', () => {
    broswer.visit('/', () => {
      browser.pressButton("Login")
      browser.assert.text('body', 'LOGIN PAGE')
    })

  it('fills in the login  form', () => {
    broswer.visit('/', () => {
      browser.pressButton("Login")
      browser.fill('email', "ayo@email.com")
      browser.fill('password', "climbing");
      browser.pressButton('Login')
      browser.assert.text('body', "Welcome")
    })
  })
})
