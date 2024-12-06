// Core Node.js modules
const os = require("os");
const path = require("path");

const { Builder, By, Key, until } = require("selenium-webdriver");

const isWebEnvironment = process.env.npm_config_web === "1";


(async function runTest() {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
        console.log(`Environment: ${isWebEnvironment ? "Web" : "Default"}`);


        await driver.get("https://www.saucedemo.com/");

        const title = await driver.getTitle();
        console.log(`Page title is: ${title}`);
    } catch (error) {
        console.error("Error running the test:", error);
    } finally {
        await driver.quit();
    }
})();