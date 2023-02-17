

module.exports = {  
   
    url: 'https://www.jumbo.com/',  //change this according to your preference
                                    //for the purpose of the test, I did not add any parameters for Staging, Dev and Prod environments yet
 
    browser: 'headlessfirefox',   //change this according to your preference (tried using chrome, firefox)
                         //headlesschrome does not work because of CSP related issues.
                         //headlessfirefox is somewhat flaky but it is still working.


    
    //greetingname will depend on the name of the user logged in (so for this user Christian is the name)
    username: 'partly.cloudy018@gmail.com',
    password: 'Testing01',

    //greetingname affects test for login page
    greetingname: ['Hallo \nChristian', 'Hello \nChristian'], 

    //Invalid Scenario
    invalidemail: 'invalidemail@test.com',
    invalidpassword: 'invalidpassword',



  };