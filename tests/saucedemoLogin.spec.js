const { test, expect } = require('@playwright/test');
const { Login } = require('../src/pages/login.page.js');

const users = [
  { userNae: 'asdf', password: 'screte'}
  //...
]


for(const user of users) {
  test('test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    const loginPage = new Login(page);
  
    await loginPage.fillUserName(user.userNae);
    await loginPage.fillPassword(user.password);
    await loginPage.clickLoginBtn();
  
    expect(await page.locator('text=Products')).toBeVisible();
    expect(page.url()).toContain('inventory')
  });
}

test('test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  const loginPage = new Login(page);

  await loginPage.fillUserName('standard_user');
  await loginPage.fillPassword('secret_sauce');
  await loginPage.clickLoginBtn();

  expect(await page.locator('text=Products')).toBeVisible();
  expect(page.url()).toContain('inventory')
});

