// features/support/steps.js
const { Given, When, Then } = require('cucumber')
const { expect }            = require('chai')

Given('the CRM Service Endpoint', function () {

  expect(this, 'config.crm.endpoint should be defined').to.have.nested.property('config.crm.endpoint')

  this.service = this.service || { }
  this.service.url = this.config.crm.endpoint

});
