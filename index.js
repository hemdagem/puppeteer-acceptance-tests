const puppeteer = require('puppeteer');

describe('Arsenal History', () => {
    beforeAll(async () => {
      await page.goto('https://www.arsenalhistory.co.uk');
    });
  
    it('should display "Arsenal" text on page', async () => {
        await page.screenshot({path: 'arsenal.png'});
        await expect(page).toMatch('Arsenal');
    });
  });