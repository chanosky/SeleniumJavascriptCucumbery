const {By, until} = require("selenium-webdriver");
const webDriver = require("selenium-webdriver");
require('chromedriver');
require('geckodriver');
const {setDefaultTimeout} = require('@cucumber/cucumber');
const {assert, expect} = require("chai");
setDefaultTimeout(60*1000);
const firefox = require('selenium-webdriver/firefox');
const chrome = require('selenium-webdriver/chrome');
const globaltestdata = require("./globaltestdata");
const browserrules = globaltestdata.browser;
const fs = require('fs');
var driver;

async function openBrowser(browser, url) {
    if (browser === 'chrome') {
        const chromeOptions = new chrome.Options();
        chromeOptions.excludeSwitches(['enable-automation']);
        chromeOptions.addArguments(['--disable-features=OutOfBlinkCors', '--disable-gpu', '--no-sandbox']);

        driver = new webDriver.Builder()
        .forBrowser('chrome')
            .forBrowser('chrome')
            .setChromeOptions(chromeOptions)
            .build();
        await driver.manage().window().setRect({width: 1920, height: 1080});
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.manage().deleteAllCookies();
        await driver.get(url);
    
    } else if (browser === 'firefox') {
        const firefoxOptions = new firefox.Options();
        firefoxOptions.setPreference('dom.webdriver.enabled', false); // Disable the "navigator.webdriver" flag
        firefoxOptions.setPreference('useAutomationExtension', false); // Disable the GeckoDriver extension

        driver = new webDriver.Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(firefoxOptions)
            .build();
        await driver.manage().window().setRect({width: 1920, height: 1080});
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.manage().deleteAllCookies();
        await driver.get(url);
    
    } else if (browser === 'headlesschrome') {
        const chromeOptions = new chrome.Options();
        chromeOptions.headless();
        chromeOptions.excludeSwitches(['enable-automation']);
        chromeOptions.addArguments(['--disable-features=OutOfBlinkCors']);

        driver = new webDriver.Builder()
        .forBrowser('chrome')
            .forBrowser('chrome')
            .setChromeOptions(chromeOptions)
            .build();
        await driver.manage().window().setRect({width: 1920, height: 1080});
        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.manage().deleteAllCookies();
        await driver.get(url);

    } else if (browser === 'headlessfirefox') {
        const firefoxOptions = new firefox.Options();
        firefoxOptions.addArguments('-headless'); // Run Firefox in headless mode
        firefoxOptions.setPreference('dom.webdriver.enabled', false); // Disable the "navigator.webdriver" flag
        firefoxOptions.setPreference('useAutomationExtension', false); // Disable the GeckoDriver extension

        driver = new webDriver.Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(firefoxOptions)
            .build();
        await driver.manage().window().setRect({width: 1920, height: 1080});
        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.manage().deleteAllCookies();
        await driver.get(url);
        
    } else {
        throw new Error(`Unsupported browser: ${browser}`);
    }
};

async function closeBrowser(){
    await driver.quit();

    };
    
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function clickElement(locator){
    var byStrategy;
    if (locator.startsWith("//")) {
        byStrategy = By.xpath(locator);
    } else if (locator.startsWith("#")) {
        byStrategy = By.css("#" + locator.substring(1));
    } else if (locator.startsWith(".")) {
        byStrategy = By.css("." + locator.substring(1));
    } else if (locator.startsWith("name_")) {
        byStrategy = By.name(locator.substring(5));
    } else if (locator.startsWith("id_")) {
        byStrategy = By.id(locator.substring(3));
    } else if (locator.startsWith("tag_")){
        byStrategy = By.tagName(locator.substring(4));
    } else {
        byStrategy = By.className(locator);
    }
    let waitlocator = await driver.findElement(byStrategy);
    await driver.wait(until.elementIsVisible(waitlocator),100000);
    await waitlocator.click();
};

async function enterText(locator, text){
    var byStrategy;
    if (locator.startsWith("//")) {
        byStrategy = By.xpath(locator);
    } else if (locator.startsWith("#")) {
        byStrategy = By.css("#" + locator.substring(1));
    } else if (locator.startsWith(".")) {
        byStrategy = By.css("." + locator.substring(1));
    } else if (locator.startsWith("name_")) {
        byStrategy = By.name(locator.substring(5));
    } else if (locator.startsWith("id_")) {
        byStrategy = By.id(locator.substring(3));
    } else if (locator.startsWith("tag_")){
        byStrategy = By.tagName(locator.substring(4));
    } else {
        byStrategy = By.className(locator);
    }
    let waitlocator = await driver.findElement(byStrategy);
    await driver.wait(until.elementIsVisible(waitlocator),100000);
    await waitlocator.click();
    await waitlocator.clear();
    await waitlocator.sendKeys(text);
};


async function verifyElementIsDisplayed(locator){
    var byStrategy;
    if (locator.startsWith("//")) {
        byStrategy = By.xpath(locator);
    } else if (locator.startsWith("#")) {
        byStrategy = By.css("#" + locator.substring(1));
    } else if (locator.startsWith(".")) {
        byStrategy = By.css("." + locator.substring(1));
    } else if (locator.startsWith("name_")) {
        byStrategy = By.name(locator.substring(5));
    } else if (locator.startsWith("id_")) {
        byStrategy = By.id(locator.substring(3));
    } else if (locator.startsWith("tag_")){
        byStrategy = By.tagName(locator.substring(4));
    } else {
        byStrategy = By.className(locator);
    }
    let waitlocator = await driver.findElement(byStrategy);
    await driver.wait(until.elementIsVisible(waitlocator),100000);
    await waitlocator.isDisplayed();
       error => {
        if (error instanceof webDriver.error.NoSuchElementError) {
          console.log('Element not found.');
          assert.notEqual(webDriver.error.NoSuchElementError,"[class NoSuchElementError extends WebDriverError]")
        }
      }
    };

async function verifyElementIsNotDisplayed(locator){
    var byStrategy;
    if (locator.startsWith("//")) {
        byStrategy = By.xpath(locator);
    } else if (locator.startsWith("#")) {
        byStrategy = By.css("#" + locator.substring(1));
    } else if (locator.startsWith(".")) {
        byStrategy = By.css("." + locator.substring(1));
    } else if (locator.startsWith("name_")) {
        byStrategy = By.name(locator.substring(5));
    } else if (locator.startsWith("id_")) {
        byStrategy = By.id(locator.substring(3));
    } else if (locator.startsWith("tag_")){
        byStrategy = By.tagName(locator.substring(4));
    } else {
        byStrategy = By.className(locator);
    }
    let waitlocator = await driver.findElement(byStrategy);
    await driver.wait(until.elementIsVisible(waitlocator),100000);
    let status = !(await waitlocator.isDisplayed());
    return status;
    };

async function checkUrl(url){
    var currenturl = await driver.getCurrentUrl();
    console.log(currenturl);
    expect(currenturl).to.be.equal(url); 

};

async function mouseOver(locator){
    var byStrategy;
    if (locator.startsWith("//")) {
        byStrategy = By.xpath(locator);
    } else if (locator.startsWith("#")) {
        byStrategy = By.css("#" + locator.substring(1));
    } else if (locator.startsWith(".")) {
        byStrategy = By.css("." + locator.substring(1));
    } else if (locator.startsWith("name_")) {
        byStrategy = By.name(locator.substring(5));
    } else if (locator.startsWith("id_")) {
        byStrategy = By.id(locator.substring(3));
    } else if (locator.startsWith("tag_")){
        byStrategy = By.tagName(locator.substring(4));
    } else {
        byStrategy = By.className(locator);
    } 
    let waitlocator = await driver.findElement(byStrategy);
    await driver.wait(until.elementIsVisible(waitlocator),100000);
    let actions = driver.actions({async: true});
    await actions.move({origin: waitlocator}).perform();
};

async function refreshPage(){
    await driver.navigate().refresh();

};

async function getlocatorText(locator){
    var byStrategy;
    if (locator.startsWith("//")) {
        byStrategy = By.xpath(locator);
    } else if (locator.startsWith("#")) {
        byStrategy = By.css("#" + locator.substring(1));
    } else if (locator.startsWith(".")) {
        byStrategy = By.css("." + locator.substring(1));
    } else if (locator.startsWith("name_")) {
        byStrategy = By.name(locator.substring(5));
    } else if (locator.startsWith("id_")) {
        byStrategy = By.id(locator.substring(3));
    } else if (locator.startsWith("tag_")){
        byStrategy = By.tagName(locator.substring(4));
    } else {
        byStrategy = By.className(locator);
    }
    let waitlocator = await driver.findElement(byStrategy);
    await driver.wait(until.elementIsVisible(waitlocator),100000);
    var text = await waitlocator.getText();
    return text;
};

async function getAttributeOfElement(locator, attribute){
    var byStrategy;
    if (locator.startsWith("//")) {
        byStrategy = By.xpath(locator);
    } else if (locator.startsWith("#")) {
        byStrategy = By.css("#" + locator.substring(1));
    } else if (locator.startsWith(".")) {
        byStrategy = By.css("." + locator.substring(1));
    } else if (locator.startsWith("name_")) {
        byStrategy = By.name(locator.substring(5));
    } else if (locator.startsWith("id_")) {
        byStrategy = By.id(locator.substring(3));
    } else if (locator.startsWith("tag_")){
        byStrategy = By.tagName(locator.substring(4));
    } else {
        byStrategy = By.className(locator);
    }
    let waitlocator = await driver.findElement(byStrategy);
    await driver.wait(until.elementIsVisible(waitlocator),100000);
    var text = await waitlocator.getAttribute(attribute);
    return text;
};

async function findMultipleElements(locator){
    var byStrategy;
    if (locator.startsWith("//")) {
        byStrategy = By.xpath(locator);
    } else if (locator.startsWith("#")) {
        byStrategy = By.css("#" + locator.substring(1));
    } else if (locator.startsWith(".")) {
        byStrategy = By.css("." + locator.substring(1));
    } else if (locator.startsWith("name_")) {
        byStrategy = By.name(locator.substring(5));
    } else if (locator.startsWith("id_")) {
        byStrategy = By.id(locator.substring(3));
    } else if (locator.startsWith("tag_")){
        byStrategy = By.tagName(locator.substring(4));
    } else {
        byStrategy = By.className(locator);
    }
    let webelements = await driver.findElements(byStrategy);
    return webelements;

};

async function scrollToElement(locator){
    var byStrategy;
    if (locator.startsWith("//")) {
        byStrategy = By.xpath(locator);
    } else if (locator.startsWith("#")) {
        byStrategy = By.css("#" + locator.substring(1));
    } else if (locator.startsWith(".")) {
        byStrategy = By.css("." + locator.substring(1));
    } else if (locator.startsWith("name_")) {
        byStrategy = By.name(locator.substring(5));
    } else if (locator.startsWith("id_")) {
        byStrategy = By.id(locator.substring(3));
    } else if (locator.startsWith("tag_")){
        byStrategy = By.tagName(locator.substring(4));
    } else if (locator.startsWith("class_")) {
        byStrategy = By.className(locator.substring(6));
    } else {
        byStrategy = By.xpath(locator);
    }
    if (browserrules === 'chrome') {
    let waitlocator = await driver.findElement(byStrategy);
    await driver.wait(until.elementIsVisible(waitlocator),100000);
    await driver.actions()
    .scroll(0, 0, 0, 0, waitlocator)
    .perform();
    }
    else if (browserrules === 'firefox') { 
    let waitlocator = await driver.wait(until.elementLocated(byStrategy));
    await driver.executeScript("arguments[0].scrollIntoView();", waitlocator);
    }

};

async function screenshot() {
    let encodedString = await driver.takeScreenshot();
    const filename = `features/screenshots/${Date.now()}_error.png`;
    fs.mkdirSync('features/screenshots', { recursive: true });
    await fs.writeFileSync(filename, encodedString, 'base64');
    const screenshot = fs.readFileSync(filename);
    return screenshot;
};



module.exports = {
    openBrowser,
    clickElement,
    enterText,
    sleep,
    verifyElementIsDisplayed,
    checkUrl,
    mouseOver,
    refreshPage,
    getlocatorText,
    findMultipleElements,
    closeBrowser,
    getAttributeOfElement,
    scrollToElement,
    verifyElementIsNotDisplayed,
    screenshot,

};

