@CRM @API @Leads
Feature: CRM Api GetLeads Query

  @RO
  Scenario: Get Leads
    Given the CRM Service Endpoint
      And the GraphQL query "leads"
    When I call the Service
    Then Service Status code should be 200
      And Service Response should be in json format
      And the GraphQL response should have property "data.leads.total"
      And the GraphQL response should have property "data.leads.items"
