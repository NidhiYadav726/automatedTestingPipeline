const loginPage = browser.page.loginPage()

describe('Login to SauceDemo', function () {
    beforeEach(function (browser) {
        // Opens the browser before each test and navigate to the login page
        loginPage.navigate();
    });

    afterEach(function (browser) {
        // Close the browser after each test executed
        browser.end();
    });

    it('User should log in successfully with valid credentials', function (browser) {
        const login = browser.page.loginPage();
        login.performLogin('standard_user', 'secret_sauce');
        //verify successfull login using assert
        browser.assert.urlEquals('https://www.saucedemo.com/inventory.html');
    });

    it('Error message on logging in with invalid credentials', function (browser) {
        const login = browser.page.loginPage();
        login.performLogin('locked_out_user', 'secret_sauce');
        // Located error message using its text content through XPath
        const xpathSelector = '//*[contains(text(), "Epic sadface: Sorry, this user has been locked out")]';
        browser.useXpath().waitForElementVisible(xpathSelector, 4000, 'Error message found using XPath').useCss();
    });

    it('Error message for empty username and password', function (browser) {
        const login = browser.page.loginPage();
        login.performLogin('', '');
        // Located error message using its text content through XPath
        const xpathSelector = '//*[contains(text(), "Epic sadface: Username is required")]';
        browser.useXpath().waitForElementVisible(xpathSelector, 4000, 'Error message found using XPath').useCss();
        
    });
});



 
