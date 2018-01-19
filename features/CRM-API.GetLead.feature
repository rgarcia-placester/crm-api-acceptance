@CRM @API @Leads
Feature: CRM Api GetLead Query

  @RO
  Scenario: Get Lead
    Given the CRM Service Endpoint
      And the GraphQL query "leadGet"
    When I call the Service
    Then Service Status code should be 200
      And Service Response should be in json format
      And the GraphQL response should have property "data.lead.id" equal to "9fd214c0-fbbf-11e7-943b-b7a799aad205"
      And the GraphQL response should have property "data.lead.primaryEmail" equal to "graphql.create@gmail.com"
