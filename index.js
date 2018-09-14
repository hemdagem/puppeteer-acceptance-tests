const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.arsenalhistory.co.uk');
//   await page.screenshot({path: 'example.png'});

//   await browser.close();
// })();

describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://google.com');
    })
  
    it('should display "google" text on page', async () => {
      await expect(page).toMatch('google');
      await page.screenshot({path: 'example.png'});
    })
  });