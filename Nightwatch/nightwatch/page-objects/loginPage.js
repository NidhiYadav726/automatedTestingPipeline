module.exports = {
    url: 'https://www.saucedemo.com/',

    elements: {
        usernameInput: '#user-name',
        passwordInput: '#password',
        loginButton: '#login-button',
        errorMessage: '#login_button_container > div > form > h3',
    },

    commands: [
        {
           
            performLogin: function (username, password) {
                return this
                    .setValue('#user-name', username)
                    .setValue('#password', password)
                    .click('#login-button');
            },
        },
    ],
   
};

