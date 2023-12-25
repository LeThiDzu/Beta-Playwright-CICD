import { test, expect } from '@playwright/test';
var randomString = require('randomstring')



test('test', async ({ browser }) => {
  const context = await browser.newContext()
  const page1 = await context.newPage()

  await page1.goto('http://117.6.134.241:8646/signin/');
  await page1.locator("css=input[name='username']").fill("asia.mgc@gmail.com")
  await page1.locator("css=input[name='password']").fill("Init123456")
  await page1.locator("css=button[type='submit']").click()
  await page1.locator("css=a[href='/master-data/brand/']").click()
  await page1.locator("xpath=//div[text()='Model']").click()
});
