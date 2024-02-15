const { test, expect } = require('@playwright/test');
const { Login } = require('../src/pages/login.page.js');

test('test login', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  const loginPage = new Login(page);

  await loginPage.fillUserName('standard_user');
  await loginPage.fillPassword('secret_sauce');
  await loginPage.clickLoginBtn();

  expect(await page.locator('text=Products')).toBeVisible();
  expect(page.url()).toContain('inventory')
});


// Parameterized version

const users = [
  { userNae: 'standard_user', password: 'secret_sauce'},
  { userNae: 'error_user', password: 'secret_sauce'},
  { userNae: 'visual_user', password: 'secret_sauce'},
  // ... more users
]


for(const user of users) {
  test(`Test user: ${user.userNae}`, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    const loginPage = new Login(page);
  
    await loginPage.fillUserName(user.userNae);
    await loginPage.fillPassword(user.password);
    await loginPage.clickLoginBtn();
  
    expect(await page.locator('text=Products')).toBeVisible();
    expect(page.url()).toContain('inventory')
  });
}
