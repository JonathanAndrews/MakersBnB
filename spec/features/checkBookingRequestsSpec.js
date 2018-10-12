const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('checks their booking requests', () => {
  const browser = new Browser();

  beforeEach((done) => {
    browser.visit('/dashboard', done);
  });

  describe("Clicks 'Check Booking Requests'", () => {
    beforeEach((done) => {
      browser.pressButton('Check Booking Requests', done);
    });

    it('should be successful', () => {
      browser.assert.success();
    });
  });

  // xit('on the dashboard', (done) => {
  //   browser.visit('/dashboard', () => {
  //       browser.pressButton("Check Booking Requests", () => {
  //         expect(browser.html("body")).toContain("Your Booking Requests");
  //         done()
  //       });
  //     });
  // });
});
