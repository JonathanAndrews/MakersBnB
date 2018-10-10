const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User visits log in page', () => {
  const browser = new Browser();

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9a0ca21cae9b9c5c19d4f3dbf7afd2c567ec019c
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
<<<<<<< HEAD
      browser.assert.text('#greeting', "Hello ayo@email.com");
    });
  });
=======
      browser.assert.text('body', "Welcome back ayo@email.com");
    });
  });
=======
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
>>>>>>> d7ace3b2ce354d19d3082a7fca4cc1e51c8a12f5
>>>>>>> 9a0ca21cae9b9c5c19d4f3dbf7afd2c567ec019c
})
