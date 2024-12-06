// Core Node.js modules
const os = require("os");
const path = require("path");

// Selenium WebDriver module
const { Builder, By, Key, until } = require("selenium-webdriver");

// Environment variables
const isWebEnvironment = process.env.npm_config_web === "1";

// Example Selenium WebDriver script
(async function runTest() {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
        console.log(`Environment: ${isWebEnvironment ? "Web" : "Default"}`);

        // Navigate to the Sauce Demo website
        await driver.get("https://www.saucedemo.com/");

        // Example: Log the page title
        const title = await driver.getTitle();
        console.log(`Page title is: ${title}`);
    } catch (error) {
        console.error("Error running the test:", error);
    } finally {
        await driver.quit();
    }
})();