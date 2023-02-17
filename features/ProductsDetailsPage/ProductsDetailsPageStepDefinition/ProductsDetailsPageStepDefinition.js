const {Given, When, Then} = require('@cucumber/cucumber');
const ProductsDetailsPageTestData = require('../ProductsDetailsPageTestData/ProductsDetailsPageTestData.js');
const ProductsDetailsPageKeywords = require('../ProductsDetailsPageKeywords/ProductsDetailsPageKeywords.js');
const ProductsPageKeywords = require('../../ProductsPage/ProductsPageKeywords/ProductsPageKeywords.js');


When('User selects a product in the Products page', async function () {
    await ProductsPageKeywords.navigateToProductDetailsPage(ProductsDetailsPageTestData.specificproductname);    

  });

Then('User lands in the Product details page', async function () {
    await ProductsDetailsPageKeywords.verifyProductDetailsPage(ProductsDetailsPageTestData.collapsiblelist);
    await ProductsDetailsPageKeywords.verifyCollapsibles();
  
  });

Then('User verifies price of the product is shown', async function () {
    await ProductsDetailsPageKeywords.verifyProductsDetailsBreadcrumbs(ProductsDetailsPageTestData.specificproductname);

  })

Then('User validates breadcrumbs', async function () {
    await ProductsDetailsPageKeywords.verifyProductsDetailsBreadcrumbs(ProductsDetailsPageTestData.specificproductname);

  })

Then('User add items to cart and validate basket item count is increased', async function () {
    await ProductsDetailsPageKeywords.addToCart(ProductsDetailsPageTestData.numberofproducts);

  })

Then('User validates basket contents', async function () {
  await ProductsDetailsPageKeywords.verifyBasket();
  await ProductsDetailsPageKeywords.verifyBasketQuantityAndPrice();

  })

Then('User removes the product from the basket', async function () {
  await ProductsDetailsPageKeywords.verifyBasketRemoveButton(ProductsDetailsPageTestData.emptycartheader, ProductsDetailsPageTestData.emptycartmessage);
  
  })




