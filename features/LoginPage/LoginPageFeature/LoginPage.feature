Feature: Login page features
    As a loyal customer I want to log-in with my My Jumbo account so that my
    shopping experience will be personalized
    
    Scenario Outline: Login with an existing customer
        Given User visits Jumbo Homepage
        When User navigates to Jumbo Login Page
        And User enters valid credentials
        And User clicks login button
        Then User should be successfully logged in and greeted

    # Scenario Outline: Login using invalid credentials
    #     Given User visits Jumbo Homepage
    #     When User navigates to Jumbo Login Page
    #     And User enters invalid credentials
    #     And User clicks login button
    #     And User checks alert message
    #     Then User checks field error messages and should not be logged in
