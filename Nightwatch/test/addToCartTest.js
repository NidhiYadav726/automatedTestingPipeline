const loginPage = browser.page.loginPage();
const addToCartPage = browser.page.addToCartPage();

describe('Login and Add to Cart Tests', function () {
    beforeEach(function (browser) {
        // Perform login before add to cart
        const login = browser.page.loginPage();
        loginPage.navigate();
        login.performLogin('standard_user', 'secret_sauce');
        
    });

    afterEach(function (browser) {
        const addToCart = browser.page.addToCartPage();
        addToCart.closeBrowser();
    });

    it('Successfully add product to cart after login', function (browser, done) {
        const addToCart = browser.page.addToCartPage();
        addToCart.addToCart();

       // Wait for shopping cart to update and assert
       browser.waitForElementVisible('#shopping_cart_container > a > span', 5000);
       browser.assert.containsText('#shopping_cart_container > a > span', '1');
    });

});
