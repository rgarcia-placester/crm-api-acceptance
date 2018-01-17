// features/support/steps.js
const { Given, When, Then } = require('cucumber')
const { expect }            = require('chai')

Given('the Service Endpoint {string}', function (url) {
  this.service = this.service || { }
  this.service.url = url
});

Given('the Service Method {string}', function (method) {
  this.service = this.service || { }
  this.service.method = method
});

Given('the Service Header {string} set to {string}', function (name, value) {
  this.service = this.service || { }
  this.service.headers = this.service.headers || {}

  this.service.headers[name] = value
});

Given('the Service Body {string}', function (body) {
  this.service = this.service || { }
  this.service.body = body
});

When('I call the Service', function () {

  let service = this.service

  return this.browser.fetch(
    this.service.url, {
    method: this.service.method,
    headers: this.service.headers,
    body: this.service.body
  })
  .then(function(response) {
    service.response = response

    return response.text()
  })
  .then(function(body) {
    service.response.body = body
  })
});

Then('Service Status code should be {int}', function (code) {
   return expect(this.service.response.status).to.be.equal(code);
});

Then('Service Response Header {string} should be {string}', function (name, value) {
   return expect(this.service.response.headers.get(name)).to.be.equal(value);
});

Then('Service Response Body should be {string}', function (body) {
  return expect(this.service.response.body).to.be.equal(body);
});

Then('Service Response should be in json format', function() {
    expect(this.service.response.headers.get('content-type')).to.include('application/json');
});

Then('the JSON response should have property {string} equal to {string}', function(prop, value) {
  return expect(JSON.parse(this.service.response.body)).to.have.nested.property(prop, value)
})

Then('the JSON response should have property {string}', function(prop) {
  return expect(JSON.parse(this.service.response.body)).to.have.nested.property(prop)
})
