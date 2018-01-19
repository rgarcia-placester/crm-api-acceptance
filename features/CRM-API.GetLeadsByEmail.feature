@CRM @API @Leads
Feature: CRM Api GetLeads Query

  @RO
  Scenario: Get Lead
    Given the CRM Service Endpoint
      And the GraphQL query "leadsGetByEmail"
    When I call the Service
    Then Service Status code should be 200
      And Service Response should be in json format
      And the GraphQL response should have property "data.leads.total"
      And the GraphQL response should have property "data.leads.items[0].primaryEmail" equal to "graphql.create@gmail.com"
