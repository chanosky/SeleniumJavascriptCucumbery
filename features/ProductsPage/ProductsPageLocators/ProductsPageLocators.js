// These are the locators seen in the Products Page

module.exports = {
    loc_xpath_products_header: "//h1[@class='jum-heading h1']",
    loc_xpath_products_results: "//span[@class='results']",
    loc_xpath_products_sort_dropdown: "//select[@aria-label='Sort by' or @aria-label='Sorteren op']",
    loc_xpath_products_grid: "//div[@data-testid='jum-card-grid']",
    loc_xpath_products_grid_list: "//h2[@data-testid='jum-heading']/a",
    loc_xpath_products_pricedetails: "//div[@data-testid='jum-price']",
    loc_xpath_products_current_price: "//div[@data-testid='jum-price']/div[@class='current-price']",
    loc_xpath_products_addtobasket_button: "//button[@aria-label='Add to basket']",
    loc_xpath_products_categories_facet: "//h3[contains(.,'Categories') or contains(.,'Categorieën')]/ancestor::div[@class='facet-group']",
    loc_xpath_products_categories_label: "//h3[contains(.,'Categories') or contains(.,'Categorieën')]",
    loc_xpath_products_categories_facet_list: "//h3[contains(.,'Categories') or contains(.,'Categorieën')]/ancestor::div[@class='facet-group']/ul/li[@class='facet-item']",
    loc_xpath_products_categories_facet_list_number: "//h3[contains(.,'Categories') or contains(.,'Categorieën')]/ancestor::div[@class='facet-group']/ul/li[@class='facet-item']/a/small",
    loc_xpath_products_tonotice_facet: "//h3[contains(.,'To notice') or contains(.,'Merken')]/ancestor::div[@class='facet-group']",
    loc_xpath_products_tonotice_label: "//h3[contains(.,'To notice') or contains(.,'Merken')]",
    loc_xpath_products_allergy_facet: "//h3[contains(.,'Allergy') or contains(.,'Allergie')]/ancestor::div[@class='facet-group']",
    loc_xpath_products_allergy_label: "//h3[contains(.,'Allergy') or contains(.,'Allergie')]",
    loc_xpath_products_dietpref_facet: "//h3[contains(.,'Diet preference') or contains(.,'Dietary preference') or contains(.,'Dieetvoorkeur')]/ancestor::div[@class='facet-group']",
    loc_xpath_products_dietpref_label: "//h3[contains(.,'Diet preference') or contains(.,'Dietary preference') or contains(.,'Dieetvoorkeur')]",
    loc_xpath_products_offers_facet: "//h3[contains(.,'Offers') or contains(.,'Aanbiedingen')]/ancestor::div[@class='facet-group']",
    loc_xpath_products_offers_label: "//h3[contains(.,'Offers') or contains(.,'Aanbiedingen')]",
    loc_xpath_products_firstitem: "//a[@class='title-link'][1]"

  };

  