@CRM @API @Contacts
Feature: CRM Api GetLeads Query

  @RO
  Scenario: Get Leads
    Given the CRM Service Endpoint
      And the GraphQL query "contacts"
    When I call the Service
    Then Service Status code should be 200
      And Service Response should be in json format
      And the GraphQL response should have property "data.contacts.total"
      And the GraphQL response should have property "data.contacts.items"
