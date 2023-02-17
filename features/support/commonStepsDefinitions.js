const {Before, After} = require('@cucumber/cucumber');
const commonKeywords = require('../support/commonKeywords.js');
const globaltestdata = require('../support/globaltestdata');
const {assert, expect,} = require("chai");
const ProductsDetailsPageTestData = require('../ProductsDetailsPage/ProductsDetailsPageTestData/ProductsDetailsPageTestData.js');
const ProductsPageTestData = require('../ProductsPage/ProductsPageTestData/ProductsPageTestData.js');


Before( async function () {
    await commonKeywords.sleep(2000)
    await commonKeywords.openBrowser(globaltestdata.browser, globaltestdata.url);
    
});

Before(async function (scenario) {
    let name = scenario.gherkinDocument.feature.name;
    if (name == 'Product details page features') {
      const product = ProductsDetailsPageTestData.specificproductname;
      const productnamelabel = ProductsDetailsPageTestData.specificproductnamelabel
      global.product = product;
      global.productlabel = productnamelabel;
    }
  });

Before(async function (scenario) {
    let name = scenario.gherkinDocument.feature.name;
    if (name == 'Products page features') {
      const product = ProductsPageTestData.searchproductname;
      const productnamelabel = ProductsPageTestData.productnamelabel
      global.product = product;
      global.productlabel = productnamelabel;
    }
  });


After( async function (scenario) {
  await commonKeywords.sleep(2000)
  if (scenario.result.status === 'FAILED'){
    const screenshotData = await commonKeywords.screenshot(this.driver);
    this.attach(screenshotData, 'image/png');
  }
  await commonKeywords.closeBrowser();
  
});
