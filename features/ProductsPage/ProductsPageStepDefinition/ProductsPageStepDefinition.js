const {Given, When, Then} = require('@cucumber/cucumber');
const ProductsPageTestData = require('../../ProductsPage/ProductsPageTestData/ProductsPageTestData.js');
const ProductsPageKeywords = require('../ProductsPageKeywords/ProductsPageKeywords.js');
const HomePageKeywords = require('../../HomePage/HomePageKeywords/HomePageKeywords.js');
const HomePageTestData = require('../../HomePage/HomePageTestData/HomePageTestData.js');


When('User searches the product', async function () {
    let product = global.product;
    await HomePageKeywords.verifySearchBar(HomePageTestData.searchbarplaceholder, HomePageTestData.searchtooltip, HomePageTestData.searchheader);
    await HomePageKeywords.searchProduct(product);

});

When('User lands in the Products page', async function () {
    let productlabel = global.productlabel;
    await ProductsPageKeywords.checkProductPageContents(productlabel, ProductsPageTestData.categoriesfacetlabel,
        ProductsPageTestData.tonoticefacetlabel, ProductsPageTestData.allergyfacetlabel, ProductsPageTestData.dietpreffacetlabel,
        ProductsPageTestData.offersfacetlabel); 
});

Then('User validates the searched product price', async function () {
    await ProductsPageKeywords.verifySearchedProductsName(ProductsPageTestData.searchproductname);
    await ProductsPageKeywords.verifySearchedProductsPrice();

});

Then('User validates the categories facet options count', async function () {
    await ProductsPageKeywords.verifyCategoriesFacet();


});

