Feature: Products page features
    As a customer I want to search based on product names so that I can easily
    find my favorite products.

    Scenario Outline: Search for a product
        Given User visits Jumbo Homepage
        When User searches the product
        And User lands in the Products page       
        Then User validates the searched product price
        And User validates the categories facet options count
