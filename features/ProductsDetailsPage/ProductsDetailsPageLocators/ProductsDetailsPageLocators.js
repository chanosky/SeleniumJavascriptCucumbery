// These are the locators seen in the Product Details Page

module.exports = {
    
    loc_xpath_productdetails_backbutton: "//button[normalize-space()='Terug' or normalize-space()='Back']",
    loc_xpath_productdetails_breadcrumbs: "//ol[@class='breadcrumb-trail']",
    loc_xpath_productdetails_breadcrumbs_list: "//ol[@class='breadcrumb-trail']/li/a",
    loc_xpath_productdetails_breadcrumbs_product_name: "//span[@class='current-item']",
    loc_xpath_productdetails_zoom_button: "//button[@aria-label='zoom-in']//*[name()='svg']",

    loc_xpath_productdetails_addtobasket_add_button: "//button[@aria-label='Add' or @aria-label='Toevoegen']",
    loc_xpath_productdetails_addtobasket_reduce_button: "//button[@aria-label='Verminderen' or @aria-label='Reduce']",
    loc_xpath_productdetails_basket: "//div[@class='nav-basket nav-bar-basket']",
    loc_xpath_productdetails_basket_count: "//span[@class='nav-basket-badge is-bottom']//span[@class='nav-basket-badge-count']",
    loc_xpath_productdetails_basket_price: "//div[@class='jum-price total']//div[@class='current-price']",

    loc_xpath_productdetails_main_box: "//div[@class='jum-panel my product-panel accent-bottom']",
    loc_xpath_productdetails_bigaddtobasket: "//div[@class='jum-quantity-button is-fullwidth is-large']//button[@aria-label='Toevoegen aan mandje' or @aria-label='Add to basket']",
    loc_xpath_productdetails_productname: "//h1[@class='jum-heading h3']//strong",
    loc_xpath_productdetails_current_price: "//div[@class='jum-price mb product-price prominent']//div[@class='current-price']",
    
    loc_xpath_productdetails_sticky_addtobasket: "//div[@class='jum-container sticky-content']//button[@aria-label='Toevoegen aan mandje' or @aria-label='Add to basket']",
    loc_xpath_productdetails_sticky_current_price: "//div[@class='jum-price product-price prominent']//div[@class='current-price']", 
    loc_xpath_productdetails_sticky_productname: "//h5[@class='jum-heading h4']",


    loc_xpath_productdetails_rightbox: "//div[@data-testid='jum-card-grid']",
    loc_xpath_productdetails_rightbox_productname: "//a[@class='title-link']",
    loc_xpath_productdetails_rightbox_current_price: "//div[@class='jum-price price right']//div[@class='current-price']",
    loc_xpath_productdetails_rightbox_addtobasket: "//div[@class='jum-quantity-button card-product-container__button']//button[@aria-label='Toevoegen aan mandje' or @aria-label='Add to basket']",
    loc_xpath_productdetails_rightbox_header: "//h3[@data-testid='jum-heading']",

    loc_xpath_productdetails_otherinfo: "//div[@class='jumbo-redesign']/div[@class='jum-container mb-2x webshop-pdp']/div[3]",
    loc_xpath_productdetails_productinfo: "//div[@class='product-information']",

    loc_xpath_productdetails_collapsible: "//div[@class='product-information']/div/button",
    loc_xpath_productdetails_productinfo_collapsible: "//div[@class='product-information']/div/button/div",
    loc_xpath_productdetails_productinfo_midpage: "//div[@analytics-tag='product description collapsible']",
    loc_xpath_productdetails_productinfo_ingredients: "//div[@analytics-tag='ingredients collapsible']//div[@class='title-wrapper']",
    loc_xpath_productdetails_productinfo_nutritions: "//div[@analytics-tag='nutritions collapsible']//div[@class='title-wrapper']",
    loc_xpath_productdetails_productinfo_description: "//div[@analytics-tag='product description collapsible']//div[@class='title-wrapper']",
    loc_xpath_productdetails_productinfo_allergies: "//div[@analytics-tag='allergies collapsible']//div[@class='title-wrapper']",
    loc_xpath_productdetails_productinfo_storage: "//div[@analytics-tag='storage and usage collapsible']//div[@class='title-wrapper']",
    loc_xpath_productdetails_productinfo_additional: "//div[@analytics-tag='toevoegingen']//div[@class='title-wrapper']",
    loc_xpath_productdetails_productinfo_manufacturer: "//div[@analytics-tag='manufacturer collapsible']//div[@class='title-wrapper']",
    loc_xpath_productdetails_productinfo_origin: "//div[@analytics-tag='origin collapsible']//div[@class='title-wrapper']",


    loc_xpath_productdetails_footer: "//div[@class='footer-top-container']",

    //Basket Section
    loc_xpath_productdetails_basket_header: "//h3[@class='jum-heading jum-basket-heading h3']//strong//font[contains(text(),'basket') or contains(text(),'Mandje')]",
    loc_xpath_productdetails_basket_headercount: "//span[@class='jum-basket-heading-count']",
    loc_xpath_productdetails_basket_search: "//input[@id='search-in-basket']",
    loc_xpath_productdetails_basket_collapsible: "//div[@class='jum-collapsible basket-category-line open']//div[@class='title']",
    loc_xpath_productdetails_basket_categories: "//div[@class='jum-select jum-basket-categories--select']",
    loc_xpath_productdetails_basket_add_product: "//span[@class='title']",
    loc_xpath_productdetails_basket_closebutton: "//button[@aria-label='close']",
    loc_xpath_productdetails_basket_banner:"//div[@class='jum-basket-banner color-black color-black']//div[@class='content']",
    loc_xpath_productdetails_basket_emptybutton: "//button[@class='jum-button jum-empty-basket-btn secondary']",
    loc_xpath_productdetails_basket_disclaimer: "//section[@class='benefits jum-basket-section basket-usps']",
    loc_xpath_productdetails_basket_disclaimer_header: "//h4[@class='jum-heading h4'][.='Advantages of online' or .='Voordelen van online']",
    loc_xpath_productdetails_basket_disclaimer_benefit1: "//ul[@class='benefits-list']/li[1]",
    loc_xpath_productdetails_basket_disclaimer_benefit2: "//ul[@class='benefits-list']/li[2]",
    loc_xpath_productdetails_basket_disclaimer_benefit3: "//ul[@class='benefits-list']/li[3]",
    loc_xpath_productdetails_basket_total_section: "//section[@class='jum-total-container']",
    loc_xpath_productdetails_basket_choose_delivery_button: "//button[@class='jum-button button-with-price jum-basket-cta block']",
    loc_xpath_productdetails_basket_total_section_price: "//span[@class='jum-total-info-price']",
    loc_xpath_productdetails_basket_total_section_subtext: "//div[@class='microcopy microcopy']",
    loc_xpath_productdetails_basket_product_list: "//div[@class='product-list']",
    loc_xpath_productdetails_basket_product_list_collapsible: "//div[@class='product-list']/span",
    loc_xpath_productdetails_basket_product_list_current_price: "//div[@class='jum-price right']//div[@class='current-price']",
    loc_xpath_productdetails_basket_product_list_delete: "//button[@class='jum-button remove tertiary compact circle']",
    loc_xpath_productdetails_basket_product_list_name: "//h1[@class='jum-heading title h6']",
    loc_xpath_productdetails_basket_product_list_count: "//div[@class='jum-quantity-button quantity-selector']//div[@class='buttons']/button",

    loc_xpath_productdetails_basket_emptystate_empty_header: "//h4[@class='jum-heading main-heading h4']",
    loc_xpath_productdetails_basket_emptystate_empty_message: "//p[@class='empty-state-message']",
    loc_xpath_productdetails_basket_emptystate_login_button: "//a[@class='jum-button secondary link'][.='Inloggen  ' or .='login  ']"
  };

  