//Core Node.js modules
const { log } = require("console");
const os = require("os");
const path = require("path");

//Selenium WebDriver module
const { Builder, By, Key, until } = require("selenium-webdriver");

//Environment variables
const isWebEnvironment = process.env.npm_config_web === "1";

(async function runTest(params) {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://www.saucedemo.com/")
        const title = await driver.getTitle();
        console.log(`Page title is: ${title}`);
        
    } catch (error) {
        console.log(`Error running the test: ${error}`);
        
    } finally{
await driver.quit()
    }
})