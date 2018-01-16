// features/support/steps.js
const { Given, When, Then } = require('cucumber')
const { expect }            = require('chai')

Given('I am on {string}', function (string) {
    return this.browser.visit(string)
});


When('I fill in {string} with {string}', function (input, text) {
    return this.browser.fill(input, text)
});


When('I press {string}', function (string) {
    return this.browser.pressButton(string)
});


Then('Page title should be {string}', function (string) {
   return this.browser.assert.text('title', string);
});


Then('Status code should be {int}', function (code) {
   return expect(this.browser.response.status).to.be.equal(code);
});

Then('Header {string} should be {string}', function (name, value) {
   return expect(this.browser.response.headers.get(name)).to.be.equal(value);
});

Then('I should see {string}', function (text) {
   return expect(this.browser.response.body.match(text)).to.not.be.null;
});
