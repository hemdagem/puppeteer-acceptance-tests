const puppeteer = require('puppeteer');

describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://www.arsenalhistory.co.uk');
    })
  
    it('should display "arsenal" text on page', async () => {
        await page.screenshot({path: 'example.png'});
        await expect(page).toMatch('Arsenal');
    })
  });