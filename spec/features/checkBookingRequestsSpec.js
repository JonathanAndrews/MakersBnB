const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('checks their booking requests', () => {
  const browser = new Browser();

  it('has a booking request button', (next) => {
    browser.visit('/dashboard', () => {
      browser.pressButton('Check Booking Requests', () => {
        expect(browser.html('body')).toContain('Your Booking Requests');
        next();
      });
    });
  });
  // 🤡
  describe('checks the confirm and deny buttons', () => {
    beforeEach((done) => {
      browser.visit('/listings/requests', done);
    });
    it('has a confirmation button', (done) => {
      browser.clickLink('Approve', () => {
        expect(browser.html('h1')).toContain('Approved Booking');
        done();
      });
    });

    it('has a deny button', (done) => {
      browser.clickLink('Deny', () => {
        expect(browser.html('h1')).toContain('Denied Booking');
        done();
      });
    });
  });
});
