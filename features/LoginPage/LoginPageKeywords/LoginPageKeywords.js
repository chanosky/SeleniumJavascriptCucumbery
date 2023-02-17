const LoginPageTestData = require('../LoginPageTestData/LoginPageTestData.js');
const LoginPageLocators = require('../LoginPageLocators/LoginPageLocators.js');
const HomePageLocators = require('../../HomePage/HomePageLocators/HomePageLocators.js');
const commonKeywords = require('../../support/commonKeywords.js');
const {expect} = require("chai");


async function clickMyJumboButton(){
    await commonKeywords.sleep(1000);
    await commonKeywords.clickElement(HomePageLocators.loc_xpath_myjumbo_button);
};

async function clickLoginButton(){
    await commonKeywords.sleep(1000);
    await commonKeywords.clickElement(HomePageLocators.loc_xpath_login_link);
};

async function enterUsername(username){
    await commonKeywords.sleep(1000);
    await commonKeywords.enterText(LoginPageLocators.loc_xpath_username_field, username);
};

async function enterPassword(password){
    await commonKeywords.sleep(1000);
    await commonKeywords.enterText(LoginPageLocators.loc_xpath_password_field, password);
};

async function checkUsernamePlaceholder(){
    await commonKeywords.sleep(1000);
    let placeholder = await commonKeywords.getAttributeOfElement(LoginPageLocators.loc_xpath_username_field, 'placeholder');
    expect(placeholder).to.be.oneOf(LoginPageTestData.emailfieldplaceholder);
};

async function checkLoginPageContents(logintext, haveaccounttext, usernametext, pwtext, newjumbotext, advjumbotext, advtext1, advtext2, advtext3){
    await commonKeywords.sleep(1000);
    await commonKeywords.verifyElementIsDisplayed(LoginPageLocators.loc_xpath_forgot_password_link)
    await commonKeywords.verifyElementIsDisplayed(LoginPageLocators.loc_xpath_login_button)
    await commonKeywords.verifyElementIsDisplayed(LoginPageLocators.loc_xpath_make_account_button)
    let loginlabel = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_login_label);
    let haveaccountlabel = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_already_have_account_label);
    let usernamelabel = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_username_label);
    let pwlabel = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_password_label);
    let newjumbolabel = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_new_to_jumbo_label);
    let advjumbolabel = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_adv_of_jumbo_label);
    let adv1 = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_jumbo_adv_label_1);
    let adv2 = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_jumbo_adv_label_2);
    let adv3 = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_jumbo_adv_label_3);
    expect(loginlabel).to.be.oneOf(logintext);
    expect(haveaccountlabel).to.be.oneOf(haveaccounttext);  
    expect(usernamelabel).to.be.oneOf(usernametext);
    expect(pwlabel).to.be.oneOf(pwtext);  
    expect(newjumbolabel).to.be.oneOf(newjumbotext);
    expect(advjumbolabel).to.be.oneOf(advjumbotext);  
    expect(adv1).to.be.oneOf(advtext1);
    expect(adv2).to.be.oneOf(advtext2);  
    expect(adv3).to.be.oneOf(advtext3);
};


async function checkErrorAlert(alertmessage1, alertmessage2){
    await commonKeywords.sleep(1000);  
    let message1 = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_login_error_message);
    let message2 = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_login_error_message2);
    expect(message1).to.contain.oneOf(alertmessage1);
    expect(message2).to.contain.oneOf(alertmessage2);    
};

async function checkValidations(emailerrormessage, passworderrormessage){
    await commonKeywords.sleep(1000);
    await commonKeywords.refreshPage();
    await commonKeywords.clickElement(LoginPageLocators.loc_xpath_login_button);    
    let usernameerror = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_login_username_error_label);    
    expect(usernameerror).to.be.oneOf(emailerrormessage);
    let passworderror = await commonKeywords.getlocatorText(LoginPageLocators.loc_xpath_login_password_error_label);    
    expect(passworderror).to.be.oneOf(passworderrormessage); 
};

async function submitCredentials(){
    await commonKeywords.sleep(1000);
    await commonKeywords.clickElement(LoginPageLocators.loc_xpath_login_button);
};






module.exports = {
    clickMyJumboButton,
    clickLoginButton,
    enterUsername,
    enterPassword,
    submitCredentials,
    checkUsernamePlaceholder,
    checkErrorAlert,
    checkValidations,
    checkLoginPageContents
    
};
