Feature: Product details page features
    1. As a customer I want to open the product detail page to get more
    information about the product

    2. As a customer I want to add the product to my basket so that I can create an order.

    Scenario Outline: Open the product detail page
        Given User visits Jumbo Homepage
        When User searches the product
        And User lands in the Products page
        And User selects a product in the Products page       
        Then User lands in the Product details page
        And User verifies price of the product is shown 
        And User validates breadcrumbs

    Scenario Outline: Add a product to the basket from the product detail page
        Given User visits Jumbo Homepage
        When User searches the product
        And User lands in the Products page
        And User selects a product in the Products page       
        Then User lands in the Product details page
        And User add items to cart and validate basket item count is increased
        And User validates basket contents
        And User removes the product from the basket
    
