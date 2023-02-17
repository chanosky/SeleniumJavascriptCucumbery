const {Given, When, Then} = require('@cucumber/cucumber');
const HomePageTestData = require('../../HomePage/HomePageTestData/HomePageTestData.js');
const HomePageKeywords = require('../../HomePage/HomePageKeywords/HomePageKeywords.js');
const globaltestdata = require('../../support/globaltestdata.js');

Given('User visits Jumbo Homepage', async function() {
    await HomePageKeywords.verifyHomePage(globaltestdata.url);
    await HomePageKeywords.clickAcceptCookiesButton();
    
    });

When('User navigates to Product menu and checks all sub menus', async function () {
    await HomePageKeywords.mouseOverToProducts();
    await HomePageKeywords.verifyProductsMenu();
    await HomePageKeywords.mouseOverToOffers();
    await HomePageKeywords.verifyOffersMenu();
    await HomePageKeywords.mouseOverToRecipes();
    await HomePageKeywords.verifyRecipesMenu();
       
    });

Then('User checks all predefined lists in the home page', async function () {
    await HomePageKeywords.verifyShoppingLists(HomePageTestData.handylistlabel, HomePageTestData.handylistscount, HomePageTestData.handyliststext);
    
    });

