const { Builder } = require('selenium-webdriver');
const LoginPage = require('../pages/loginPage');
const loginData = require('../data/loginData.json');

describe('Login Tests', function() {
  let driver;
  let loginPage;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    loginPage = new LoginPage(driver);
  });

  after(async function() {
    await driver.quit();
  });

  loginData.forEach((data) => {
    it(`handle login with ${data.username}`, async function() {
      await driver.get('https://www.saucedemo.com/');
      await loginPage.login(data.username, data.password);

      if (data.username === 'standard_user' && data.password === 'secret_sauce') {
        await driver.wait(until.elementLocated(By.id('inventory_container')), 5000);
        const pageTitle = await driver.getTitle();
        assert.equal(pageTitle, 'Swag Labs');
    } else {
        const errorMessage = await driver.findElement(By.xpath('//h3[@data-test="error"]')).getText();
        assert.include(errorMessage, 'Epic sadface');
    }
    });
  });
});