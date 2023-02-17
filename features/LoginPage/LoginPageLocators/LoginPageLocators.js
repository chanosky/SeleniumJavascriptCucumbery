// These are the locators seen in the Login Page

module.exports = {
    loc_xpath_username_label: "//label[@for='username']",
    loc_xpath_password_label: "//label[@for='password']",
    loc_xpath_username_field: "//input[@id='username']",
    loc_xpath_password_field: "//input[@id='password']",
    loc_xpath_login_button: "//button[@id='submit']",
    loc_xpath_login_label: "//strong[normalize-space()='Inloggen' or normalize-space()='login']",
    loc_xpath_already_have_account_label: "//form[@id='jum-login-form']/h2[@class='jum-heading subtitle bold h5']",
    loc_xpath_login_username_error_label: "//p[@data-testid='error-username']",
    loc_xpath_login_password_error_label: "//p[@data-testid='error-password']",
    loc_xpath_forgot_password_link: "//span[@class='button-weight'][contains(.,'Wachtwoord vergeten?') or contains(.,'Forgot your password?')]",
    loc_xpath_make_account_button: "//a[normalize-space()='Maak een account' or normalize-space()='make an account']",
    loc_xpath_new_to_jumbo_label: "//section[@class='register']//h2[@class='jum-heading subtitle bold h5']",
    loc_xpath_adv_of_jumbo_label: "//h3[@class='jum-heading title h5']//span",
    loc_xpath_jumbo_adv_label_1: "//li[@data-testid='jumbo-account-advantage-1']",
    loc_xpath_jumbo_adv_label_2: "//li[@data-testid='jumbo-account-advantage-2']",
    loc_xpath_jumbo_adv_label_3: "//li[@data-testid='jumbo-account-advantage-3']",
    loc_xpath_login_error_alert: "//div[@class='jum-notification error prominent']",
    loc_xpath_login_error_message: "//div[@class='jum-notification error prominent']/strong",
    loc_xpath_login_error_message2: "//p[@class='error-paragraph'][contains(.,'Probeer het nogmaals. Of ben je misschien je') or contains(.,'Try again. Or maybe you are you')]",
    loc_xpath_login_error_message2_link: "//a[@data-label='wachtwoord vergeten?']//font[contains(text(),'Forgot your password?') or contains(text(),'wachtwoord vergeten?')]",
  };