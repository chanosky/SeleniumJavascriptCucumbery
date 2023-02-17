const HomePageLocators = require('../HomePageLocators/HomePageLocators.js');
const commonKeywords = require('../../support/commonKeywords.js');
const {expect} = require("chai");
const LoginPageLocators = require('../../LoginPage/LoginPageLocators/LoginPageLocators.js');


async function clickAcceptCookiesButton(){
    await commonKeywords.sleep(1000);
    try {
        await commonKeywords.clickElement(HomePageLocators.loc_xpath_accept_cookie_button);
    }
    catch {
        console.log('cookies accepted');
    }
    
};

async function verifyHomePage(url){
    await commonKeywords.sleep(2000);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_myjumbo_button);
    await commonKeywords.checkUrl(url);
};

async function mouseOverToProducts(){
    await commonKeywords.sleep(1000);
    try {
        await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    }
    catch {
        commonKeywords.refreshPage();
    }

};

async function verifyProductsMenu(){
    await commonKeywords.sleep(1000);

    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_1);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_1);    
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_1_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_1_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_2);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_2);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_2_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_2_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_3);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_3);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_3_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_3_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_4);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_4);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_4_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_4_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_5);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_5);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_5_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_5_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_6);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_6);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_6_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_6_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_7);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_7);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_7_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_7_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_8);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_8);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_8_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_8_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_9);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_9);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_9_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_9_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_10);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_10);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_10_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_10_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_11);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_11);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_11_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_11_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_12);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_12);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_12_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_12_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_13);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_13);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_13_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_13_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_14);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_14);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_14_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_14_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_15);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_15);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_15_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_15_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_16);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_sub_menu_16);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_16_header);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_16_view_all_link);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    // await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_17);
    // await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_products_sub_menu_18);

        // This is the shortened code for the step above. Though this is short, I think this is hard to read by new users
        // I'll leave this here for reference:

    for (let productSubMenu = 1; productSubMenu <= 16; productSubMenu++) {
        const productsSubMenuXpath = `loc_xpath_products_sub_menu_${productSubMenu}`;
        for (let headerNumber = 1; headerNumber <= 1; headerNumber++) {
          await commonKeywords.verifyElementIsDisplayed(HomePageLocators[productsSubMenuXpath]);
          await commonKeywords.mouseOver(HomePageLocators[productsSubMenuXpath]);    
          await commonKeywords.verifyElementIsDisplayed(HomePageLocators[`${productsSubMenuXpath}_header`]);
          await commonKeywords.verifyElementIsDisplayed(HomePageLocators[`${productsSubMenuXpath}_view_all_link`]);
          await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
          await commonKeywords.mouseOver(HomePageLocators.loc_xpath_products_menu);
        }
      }

};    

async function mouseOverToOffers(){
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_offers_menu);
    
};

async function verifyOffersMenu(){
    await commonKeywords.sleep(1000);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_offers_sub_menu_1);
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_offers_sub_menu_1);    
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_offers_sub_menu_1_header);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_offers_sub_menu_1_view_all_link);
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_offers_menu);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_offers_sub_menu_2);
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_offers_menu);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_offers_sub_menu_3);
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_offers_sub_menu_3);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_offers_sub_menu_3_header);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_offers_sub_menu_3_view_all_link);
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_offers_menu);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_offers_sub_menu_4);
};

async function mouseOverToRecipes(){
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_recipes_menu);
    
};

async function verifyRecipesMenu(){
    await commonKeywords.sleep(1000);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_recipes_sub_menu_1);
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_recipes_sub_menu_1);    
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_recipes_sub_menu_1_header);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_recipes_sub_menu_1_view_all_link);
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_myjumbo_button);
    await commonKeywords.mouseOver(HomePageLocators.loc_xpath_recipes_menu);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_recipes_sub_menu_2);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_recipes_sub_menu_3);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_recipes_sub_menu_4);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_recipes_sub_menu_5);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_recipes_sub_menu_6);

};

async function verifyShoppingLists(list, listcount, listtext){
    await commonKeywords.sleep(1000);
    await commonKeywords.scrollToElement(HomePageLocators.loc_xpath_viewlist_button);    
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_viewlist_button);
    let text = await commonKeywords.getlocatorText(HomePageLocators.loc_xpath_handylist_label);
    expect(text).to.be.oneOf(list);
    let listelements = await commonKeywords.findMultipleElements(HomePageLocators.loc_xpath_handylists_list);
    expect(listelements.length).to.be.equal(listcount);   
    listelements.forEach(async (listelement) => {
        try{        
            var actualText = await listelement.getText();
            expect(actualText).to.be.oneOf(listtext);
        }
        catch {
            console.log(actualText + ' is not in the featured list')
        }
    });
    
};

async function nameGreetingHomePage(greet){
    await commonKeywords.sleep(10000);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_myjumbo_button);
    await commonKeywords.sleep(3000);    
    let greeting = await commonKeywords.getlocatorText(HomePageLocators.loc_xpath_myjumbo_button);
    expect(greeting).to.be.oneOf(greet);
};

async function searchProduct(product){
    await commonKeywords.sleep(1000);
    await commonKeywords.enterText(HomePageLocators.loc_xpath_searchbar, product);
    await commonKeywords.clickElement(HomePageLocators.loc_xpath_searchbar_button_enabled);  

};

async function verifySearchBar(placeholdertext, tooltiptext, headertext){
    await commonKeywords.sleep(1000);
    let placeholder = await commonKeywords.getAttributeOfElement(HomePageLocators.loc_xpath_searchbar, 'placeholder');
    expect(placeholder).to.be.oneOf(placeholdertext);
    await commonKeywords.clickElement(HomePageLocators.loc_xpath_searchbar);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_searchbar_suggestions_list);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_searchbar_button_disabled);
    await commonKeywords.enterText(HomePageLocators.loc_xpath_searchbar, 'sampletext');
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_searchbar_button_enabled);
    await commonKeywords.verifyElementIsDisplayed(HomePageLocators.loc_xpath_searchbar_x_button);
    await commonKeywords.clickElement(HomePageLocators.loc_xpath_searchbar_x_button);
    let tooltip = await commonKeywords.getlocatorText(HomePageLocators.loc_xpath_searchbar_tooltip);
    expect(tooltip).to.be.oneOf(tooltiptext);
    let header = await commonKeywords.getlocatorText(HomePageLocators.loc_xpath_searchbar_header);
    expect(header).to.be.oneOf(headertext);
};

 
module.exports = {
    clickAcceptCookiesButton,
    verifyHomePage,
    mouseOverToProducts,
    verifyProductsMenu,
    mouseOverToOffers,
    mouseOverToRecipes,
    verifyOffersMenu,
    verifyRecipesMenu,
    verifyShoppingLists,
    nameGreetingHomePage,
    searchProduct,
    verifySearchBar

};