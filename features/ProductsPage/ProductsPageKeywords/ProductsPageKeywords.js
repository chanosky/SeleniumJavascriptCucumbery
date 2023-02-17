const ProductsPageLocators = require('../ProductsPageLocators/ProductsPageLocators.js');
const commonKeywords = require('../../support/commonKeywords.js');
const {expect} = require("chai");



async function checkProductPageContents(searchedproductheader, categorieslabel, tonoticelabel, allergylabel, dietpreflabel, offerslabel){
    await commonKeywords.sleep(1000);
    await commonKeywords.verifyElementIsDisplayed(ProductsPageLocators.loc_xpath_products_sort_dropdown);
    await commonKeywords.verifyElementIsDisplayed(ProductsPageLocators.loc_xpath_products_grid)
    await commonKeywords.verifyElementIsDisplayed(ProductsPageLocators.loc_xpath_products_categories_facet)
    await commonKeywords.verifyElementIsDisplayed(ProductsPageLocators.loc_xpath_products_tonotice_facet);
    await commonKeywords.verifyElementIsDisplayed(ProductsPageLocators.loc_xpath_products_allergy_facet)
    await commonKeywords.verifyElementIsDisplayed(ProductsPageLocators.loc_xpath_products_dietpref_facet)
    await commonKeywords.verifyElementIsDisplayed(ProductsPageLocators.loc_xpath_products_offers_facet) 
    let searchedproduct = await commonKeywords.getlocatorText(ProductsPageLocators.loc_xpath_products_header);
    let categories = await commonKeywords.getlocatorText(ProductsPageLocators.loc_xpath_products_categories_label);
    let tonotice = await commonKeywords.getlocatorText(ProductsPageLocators.loc_xpath_products_tonotice_label);
    let allergy = await commonKeywords.getlocatorText(ProductsPageLocators.loc_xpath_products_allergy_label);
    let dietpref = await commonKeywords.getlocatorText(ProductsPageLocators.loc_xpath_products_dietpref_label);
    let offers = await commonKeywords.getlocatorText(ProductsPageLocators.loc_xpath_products_offers_label);
    expect(searchedproduct).to.be.oneOf(searchedproductheader);
    expect(categories).to.be.oneOf(categorieslabel);  
    expect(tonotice).to.be.oneOf(tonoticelabel);
    expect(allergy).to.be.oneOf(allergylabel);  
    expect(dietpref).to.be.oneOf(dietpreflabel);
    expect(offers).to.be.oneOf(offerslabel);  
};

async function verifySearchedProductsName(product){
    await commonKeywords.sleep(1000);
    let listelements = await commonKeywords.findMultipleElements(ProductsPageLocators.loc_xpath_products_grid_list);
    listelements.forEach(async (listelement) => {
        const actualText = await listelement.getText();
        expect(actualText).to.contain(product);
      });
    
};

async function verifySearchedProductsPrice(){
    await commonKeywords.sleep(1000);
    let listelements = await commonKeywords.findMultipleElements(ProductsPageLocators.loc_xpath_products_current_price);
    listelements.forEach(async (listelement, index) => {
        const actualText = await listelement.getText();
        expect(actualText.replace(/\n/g, "")).to.match(/^\d+$/);
      });
    
};

async function verifyCategoriesFacet(){
    await commonKeywords.sleep(1000);
    let listelements = await commonKeywords.findMultipleElements(ProductsPageLocators.loc_xpath_products_categories_facet_list_number);
    listelements.forEach(async (listelement, index) => {
        const actualText = await listelement.getText();
        expect(actualText).to.not.equal(0);
      });

};

async function navigateToProductDetailsPage(product){
    await commonKeywords.sleep(1000);
    let producttext = await commonKeywords.getlocatorText(ProductsPageLocators.loc_xpath_products_firstitem);
    expect(producttext).to.contain(product);
    await commonKeywords.clickElement(ProductsPageLocators.loc_xpath_products_firstitem);

};

module.exports = {
    checkProductPageContents,
    verifySearchedProductsName,
    verifySearchedProductsPrice,
    verifyCategoriesFacet,
    navigateToProductDetailsPage
    
};
