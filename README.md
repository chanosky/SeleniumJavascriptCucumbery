# **Selenium Automation using Cucumber Framework (JS)**

  

*This automation script uses **Cucumber-js (Framework)**, **Selenium-Webdriver** and **Chai.js (Assertion)** libraries. This framework keeps in mind the user which will run and check the scripts. Using Gherkin syntax in a more declarative approach will definitely help the user understand what the tests are about.*

*The purpose of this automation script is for it to be **highly maintainable**, **easy to understand for users** and **to be used as early as possible in the development cycle**. This script also aims for it to be adaptable and should be ran in different environments.*
  

## JUMBO Web App Features

**Feature 1: Home page features**

As a customer I want to open the Jumbo website or APP so that I can learn
more about what Jumbo has to offer

 ***Scenario 1: Open the jumbo website or APP***

- Given User visits Jumbo Homepage
- When User navigates to Product menu and checks all sub menus
- Then User checks all predefined lists in the home page


------------------

**Feature 2: Login page features**

As a loyal customer I want to log-in with my My Jumbo account so that my
shopping experience will be personalized

***Scenario 1: Login with an existing customer***

- Given User visits Jumbo Homepage
- When User navigates to Jumbo Login Page
- And User enters valid credentials
- And User clicks login button
- Then User should be successfully logged in and greeted

 
***Scenario 2: Login using invalid credentials***

- Given User visits Jumbo Homepage
- When User navigates to Jumbo Login Page
- And User enters invalid credentials
- And User clicks login button
- And User checks alert message
- Then User checks field error messages and should not be logged in
-------------------

**Feature 3: Products page features**

As a customer I want to search based on product names so that I can easily
find my favorite products.

***Scenario 1: Search for a product***

- Given User visits Jumbo Homepage
- When User searches the product
- And User lands in the Products page
- Then User validates the searched product price
- And User validates the categories facet options count
-------------------
  
  **Feature 4: Product details page features**

As a customer I want to open the product detail page to get more
information about the product.

***Scenario 1: Open the product detail page***

- Given User visits Jumbo Homepage
- When User searches the product
- And User lands in the Products page
- And User selects a product in the Products page
- And Then User lands in the Product details page
- And User verifies price of the product is shown
- And User validates breadcrumbs
-------------------
  
As a customer I want to add the product to my basket so that I can create an order.

***Scenario 2: Add a product to the basket from the product detail page***

- Given User visits Jumbo Homepage
- When User searches the product
- And User lands in the Products page
- And User selects a product in the Products page
- And Then User lands in the Product details page
- And User add items to cart and validate basket item count is increased
- And User validates breadcrumbs
- And User removes the product from the basket

## Automation Framework features

 - **Locator Strategy**
This locator strategy can do wonders in Selenium Frameworks, since selenium use locators for finding elements, these are mostly the ones changed in the UI. The problem here is Selenium needs the "By" class and should be partnered with the type of locator. For example: We used xpath in the findElement code, but we need to change it to ID or Class, we needed to change both the (findElement(By)) code and the locator. The locator strategy minimizes that kind of work.

***User can use locator types for xpath, css, ID, Name, Class and TagName but naming conventions should be followed when declaring some of them.***

			 TagName - should have a prefix of tag_
			 Class - should have a prefix of class_
			 ID - should have a prefix of id_
			 Name - should have a prefix of name_
			 xpath - should have a prefix of //
			 css- should have a prefix of . or #

 - **Keyword Driven Approach**
	By using the keyword driven approach. We future proof our automation framework. This will make us create additional steps easily since we already have the base of our codes. New engineers can adapt to this easily since they will just reuse the keywords for them to create new scripts. Since we already have the base codes and also the keywords, we can now create automation scripts earlier in the development.

-   **Page Object Model structure**  
This automation framework uses a Page Object Model structure, one of the advantages of this is that we organize our test scripts and keywords according to the page associated with it. We can avoid clutter and confusion if more tests are added to the framework later on. Maintainability will be very easy, since we will just change something associated in the page we are working on and should not affect other pages.

-   **HTML report after the test run**  
There will be a report generated automatically after the run. This will be stored in the `Reports/htmlreports` directory.

-   **Screenshot automation is failed**  
When a script encounters an error, there will be a screenshot of the page when we encountered the error. It will be stored in the `screenshots` directory and will be attached to the html report after execution.

-   **Multiple browser support**  
The automation framework supports 2 browsers (Chrome and Firefox). Headless mode for both are also supported but with headless chrome, there is a CSP issue. Change the browser in the `globalTestdata.js` file

			 

  
# Prerequisites

  **Here are the prerequisites in order to run the script:**

Dependencies
- [ ] nodejs v17.6.0 or latest, should be built in with the latest "npm"

- [ ] cucumber.js v8.11.1 or latest (will automatically be installed using the package.json file)

- [ ] selenium_webdriver v4.8.0 or latest (will automatically be installed using the package.json file)

- [ ] chai.js v4.3.7 or latest (will automatically be installed using the package.json file)


Optional items
- [ ] git 2.33.0.windows.2 or latest should be installed for windows in order to take advantage of git commands in the command line
- [ ] chromedriver v110.0.0 or latest (will automatically be installed using the package.json file)

- [ ] geckodriver v3.2.0 or latest (will automatically be installed using the package.json file)

- [ ] cucumber pretty formatter v1.0.0 or latest (will automatically be installed using the package.json file)
      ( *this will be just used for debugging purposes, it is not essential to run the script.*)


# Steps to run

## Get the script and install necessary stuff...
1. Install NodeJS on your system. You can download the latest version from the official website: https://nodejs.org/en/download/.

2. Open the installer and follow the prompts to install the Node.js. By default, the installer uses the Node.js distribution in C:\Program Files\nodejs. The installer should set the C:\Program Files\nodejs\bin directory in Window's PATH environment variable. Restart any open command prompts for the change to take effect.

3. Verify installation is successful by running `node -v` in command line, verify npm is also available by running `npm -v`in the command line as well. Both should show their respective versions.

4. Navigate to your desired folder in which you will place the app and enter the terminal (CMD for windows)

5. Visit https://github.com/chanosky/SeleniumJavascriptCucumbery and clone the files. Use the command `git clone` followed by the repository url to fetch the script from GitHub, for example: `https://github.com/chanosky/SeleniumJavascriptCucumbery.git` . User can also just download the repository and manually extract it on the desired folder


## How to run the automation test?

1. Open a command prompt or terminal window and navigate to the directory where you want to store the script.

2. Navigate into the cloned repository by using the command `cd yourrepository` (make sure you are in the `/ServiceModuleAPITest` folder.)

3. Install the necessary requirements by running the command `npm install`

4. The test has multiple ways to run the automation tests, see commands below:
- run command `npm run homepagefeature` to run the Home Page features
- run command `npm run loginpagefeature` to run the Login Page features
- run command `npm run productspagefeature` to run the Products Page features
- run command `npm run productdetailspagefeature` to run the Products Details Page features
- run command `npm run alltests` to run the All features

5. There will be an html file which will be generated in the features/Reports directory for the user to check the result of the test.
6. Screenshots will also be generated for failed runs.  


## Limitations

This script has the following limitations:  

1. The script has only been tested on a Windows 10 operating system. There may be compatibility issues when running the script on other operating systems such as MacOS, Linux, etc.

2. CI/CD for this script is not yet optimized, I just created a simple CI/CD using github actions if in case there will be a push in the code. This will then run all tests.

3. Using headless chrome is not possible due to CSP (Content Security Policy). This limits the execution and will incur errors. 

4. I'm using a VPN to be able to login or to navigate the Jumbo web app. This limits the speed of my browsing thus affects the speed of the automation script. Keep in mind that I use some sleep commands just to avoid race conditions and loading issues when running the script. This can be improved when the environment factors are taken care of.

5. I was not able to automate all the nooks and crannies of the features. But I am very sure that I automated those added in the assignment.

6. The locators can adapt to EN and NL languages, I used google translate to check the labels. But I was not able to test using the translated language (EN).

7. I did not place all test data in one file, based on my experience before in testing an ecommerce site, there are so many locators and test data added in one file and it was very hard to look at. Also it take a while to for you to find what you are looking for because they are added in just one file.

8. When running using Github actions, I encounter the ACCESS DENIED issue. Please keep this in mind when checking. I also encounter this while creating the script, I needed to access VPN for me to bypass the issue.


It is important to keep these limitations in mind when using this script and to thoroughly test the script on different operating systems before using it.

 
> Do not change anything inside the folders, check the commented variables inside `folders with testdata in their names`, you can play around with this test data file but changing any variables might incur errors when running.

  

## Bugs and Suggestions found

 
1. The count displayed in the basket icon does not update when items are added or removed in the basket. This also occurs once you are inside the basket page. Page needs to be refreshed in order for the correct value to take effect.