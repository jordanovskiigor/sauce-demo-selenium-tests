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
    it(`should handle login with ${data.username}`, async function() {
      await driver.get('https://www.saucedemo.com/');
      await loginPage.login(data.username, data.password);

      // Add assertions based on your test scenario
      // Example: Check for successful login by checking URL
      if (data.username === 'standard_user' && data.password === 'secret_sauce') {
        // Add assertion for successful login
      } else {
        // Add assertion for failure
      }
    });
  });
});