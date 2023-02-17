const ProductsDetailsPageLocators = require('../ProductsDetailsPageLocators/ProductsDetailsPageLocators.js');
const commonKeywords = require('../../support/commonKeywords.js');
const {expect} = require("chai");

async function verifyProductDetailsPage(collapselist){
    await commonKeywords.sleep(2000);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_backbutton);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_breadcrumbs)
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_zoom_button)
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_main_box);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_bigaddtobasket);
    try {
        await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_rightbox);
        await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_rightbox_header);   
    } catch { 
        console.log('Other Species box not available');           
    };
    let listelements = await commonKeywords.findMultipleElements(ProductsDetailsPageLocators.loc_xpath_productdetails_productinfo_collapsible);
    listelements.forEach(async (listelement) => {
        try {
            const actualText = await listelement.getText();
            expect(collapselist).to.include(actualText);  
        } catch (error){ 
            console.error(error+ 'collapsible not available');
         
        };
      });               
    await commonKeywords.scrollToElement(ProductsDetailsPageLocators.loc_xpath_productdetails_footer);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_sticky_addtobasket);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_sticky_current_price);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_sticky_productname);

};

async function verifyCollapsibles() {
    await commonKeywords.sleep(1000);
    await commonKeywords.scrollToElement(ProductsDetailsPageLocators.loc_xpath_productdetails_backbutton);
    let listelements = await commonKeywords.findMultipleElements(ProductsDetailsPageLocators.loc_xpath_productdetails_collapsible);
    for (const listelement of listelements) {
      const initialattribute = await listelement.getAttribute('aria-expanded');
      if (initialattribute == true) 
      {
        console.log('already collapsed');
        await commonKeywords.sleep(1000);
        await listelement.click();
        const newattribute = await listelement.getAttribute('aria-expanded');
        newattribute == false;
      } 
      else 
      {        
        await listelement.click();
        await commonKeywords.sleep(1000);
        const newattribute = await listelement.getAttribute('aria-expanded');
        newattribute == true;
      }
    
  }

};

async function verifyProductDetailsPrice(){
    await commonKeywords.sleep(1000);
    let mainboxcurrentprice = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_current_price);
    let price = mainboxcurrentprice.replace(/\n/g, ".");
    let [left, right] = price.split(".");
    console.log("price is: "+ left + 'Units and ' + right + 'cents');

    await commonKeywords.scrollToElement(ProductsDetailsPageLocators.loc_xpath_productdetails_footer);
    let stickycurrentprice = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_sticky_current_price);
    let stickyprice = stickycurrentprice.replace(/\n/g, ".");
    let [stickyleft, stickyright] = stickyprice.split(".");
    console.log("sticky price is: "+ stickyleft + 'Units and ' + stickyright + 'cents');
  
};

async function verifyProductsDetailsBreadcrumbs(product){
    await commonKeywords.sleep(1000);
    await commonKeywords.scrollToElement(ProductsDetailsPageLocators.loc_xpath_productdetails_backbutton);
    let listelements = await commonKeywords.findMultipleElements(ProductsDetailsPageLocators.loc_xpath_productdetails_breadcrumbs_list);
    listelements.forEach(async (listelement) => {
        const link = await listelement.getAttribute('href');
        expect(link).to.include('http')
      });
    let lastelement = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_breadcrumbs_product_name);
        expect(lastelement).to.be.equal(product);    
    
};

async function addToCart(numberofitem){
    await commonKeywords.sleep(1000);
    await commonKeywords.scrollToElement(ProductsDetailsPageLocators.loc_xpath_productdetails_breadcrumbs_product_name);
    try {
        let basketcount = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_count);
        let basketprice = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_price);
        console.log(basketcount);
        console.log(basketprice);
    } catch (error) {
        console.log('no items are added');
    }
    let mainboxcurrentprice = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_current_price);
    let price = mainboxcurrentprice.replace(/\n/g, ".");
    console.log(parseFloat(price));
    await commonKeywords.clickElement(ProductsDetailsPageLocators.loc_xpath_productdetails_bigaddtobasket);
    await commonKeywords.sleep(2000);    
    for (let i = 0; i < numberofitem; i++) {
        await commonKeywords.sleep(3000);
        await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_addtobasket_add_button);
        await commonKeywords.clickElement(ProductsDetailsPageLocators.loc_xpath_productdetails_addtobasket_add_button);
        var newbasketcount = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_count);
        var newbasketprice = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_price);
        var newbasketpriceint = newbasketprice.replace(/\n/g, ".")
        expect(parseInt(newbasketcount, 10)).to.be.equal(i + 2);
        expect(parseFloat(newbasketpriceint)).to.be.equal(parseFloat(price) * (i + 1));
      }
      await commonKeywords.sleep(3000);
      var finalbasketcount = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_count);
      var finalbasketprice = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_price);
      var finalbasketpriceint = finalbasketprice.replace(/\n/g, ".")
      this.finalbasketcount = finalbasketcount;
      this.finalbasketprice = finalbasketpriceint;

};

async function verifyBasket(){
    await commonKeywords.sleep(1000);
    await commonKeywords.clickElement(ProductsDetailsPageLocators.loc_xpath_productdetails_basket);
    await commonKeywords.sleep(1000);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_add_product);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_categories);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_total_section);    
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_choose_delivery_button);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_total_section_subtext);    
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_closebutton);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_collapsible);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_count);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_search);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_emptybutton);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_banner);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_disclaimer);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_disclaimer_header);   
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_disclaimer_benefit1);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_disclaimer_benefit2);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_disclaimer_benefit3);
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_product_list);
        

};

async function verifyBasketQuantityAndPrice(){
    await commonKeywords.sleep(1000);
    let basketprice = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_product_list_current_price);
    let price = basketprice.replace(/\n/g, ".");
    let basketcount = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_product_list_count);
    expect(basketcount).to.be.equal(this.finalbasketcount);
    expect(price).to.be.equal(this.finalbasketprice);  

};

async function verifyBasketRemoveButton(emptyheader, emptymessage){
    await commonKeywords.sleep(1000);
    await commonKeywords.clickElement(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_emptybutton);
    let emptystateheader = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_emptystate_empty_header);
    let emptystatemessage = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_emptystate_empty_message);  
    await commonKeywords.verifyElementIsDisplayed(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_emptystate_login_button);          
    let basketprice = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_total_section_price);
    let price = basketprice.slice(0, 1) + '.' + basketprice.slice(1);
    try {
        var basketcountstr = await commonKeywords.getlocatorText(ProductsDetailsPageLocators.loc_xpath_productdetails_basket_headercount);
        var basketcountint = parseInt(basketcountstr.replace(/[()]/g, ''));
        expect(basketcountint).to.be.equal(0);
    } catch (error) {
        console.log('Has a bug which user needs to refresh the page before it updates');
    }
    await commonKeywords.refreshPage();
    expect(price).to.be.equal('0.00');
    expect(basketcountint).to.be.equal(0);
    expect(emptystateheader).to.be.oneOf(emptyheader);
    expect(emptystatemessage).to.be.oneOf(emptymessage);    
       
};




module.exports = {
    verifyProductDetailsPage,
    verifyCollapsibles,
    verifyProductDetailsPrice,
    verifyProductsDetailsBreadcrumbs,
    addToCart,
    verifyBasket,
    verifyBasketQuantityAndPrice,
    verifyBasketRemoveButton

    
};
