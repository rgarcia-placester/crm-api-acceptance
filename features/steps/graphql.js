// features/support/steps.js
const { Given, When, Then } = require('cucumber')
const { expect }            = require('chai')

Given('the GraphQL query {string}', function (name) {
  this.service         = this.service || { }
  this.service.method  = 'POST'
  this.service.headers = { 'Content-Type': 'application/json' }
  this.service.body    = JSON.stringify(this.queries[name])
});

Then('the GraphQL response should have property {string} equal to {string}', function(prop, value) {
  return expect(JSON.parse(this.service.response.body)).to.have.nested.property(prop, value)
})

Then('the GraphQL response should have property {string}', function(prop) {
  return expect(JSON.parse(this.service.response.body)).to.have.nested.property(prop)
})
