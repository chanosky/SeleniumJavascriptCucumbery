const {Given, When, Then} = require('@cucumber/cucumber');
const HomePageKeywords = require('../../HomePage/HomePageKeywords/HomePageKeywords.js');
const LoginPageKeywords = require('../../LoginPage/LoginPageKeywords/LoginPageKeywords.js');
const globaltestdata = require('../../support/globaltestdata.js');
const LoginPageTestData = require('../LoginPageTestData/LoginPageTestData.js');


When('User navigates to Jumbo Login Page', async function () {
    await LoginPageKeywords.clickMyJumboButton();
    await LoginPageKeywords.clickLoginButton();
    await LoginPageKeywords.checkLoginPageContents(LoginPageTestData.loginlabel,
         LoginPageTestData.alreadyhaveaccountlabel, LoginPageTestData.emaillabel,
         LoginPageTestData.passwordlabel, LoginPageTestData.newtojumbolabel,
         LoginPageTestData.advofjumboacctlabel, LoginPageTestData.advofjumboacct1, 
         LoginPageTestData.advofjumboacct2, LoginPageTestData.advofjumboacct3);
    await LoginPageKeywords.checkUsernamePlaceholder();

});

When('User enters valid credentials', async function () {
    await LoginPageKeywords.enterUsername(globaltestdata.username);
    await LoginPageKeywords.enterPassword(globaltestdata.password);
});

When('User clicks login button', async function () {
    await LoginPageKeywords.submitCredentials();

});

Then('User should be successfully logged in and greeted', async function () {
    await HomePageKeywords.nameGreetingHomePage(globaltestdata.greetingname);

});

When('User enters invalid credentials', async function () {
    await LoginPageKeywords.enterUsername(globaltestdata.invalidemail);
    await LoginPageKeywords.enterPassword(globaltestdata.invalidpassword);

});

When('User checks alert message', async function () {
    await LoginPageKeywords.checkErrorAlert(LoginPageTestData.loginerrormessage1, LoginPageTestData.loginerrormessage2);

});

Then('User checks field error messages and should not be logged in', async function () {
    await LoginPageKeywords.checkValidations(LoginPageTestData.emailerrorlabel, LoginPageTestData.passworderrorlabel);

});

