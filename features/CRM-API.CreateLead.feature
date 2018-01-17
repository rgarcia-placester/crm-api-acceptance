@CRM @API @Leads
Feature: CRM Api Create Lead

  @RW @Staging
  Scenario: Create a Lead
    Given the Service Endpoint "https://crm-api.pl-internal.com/v1"
      And the GraphQL query "leadCreate"
    When I call the Service
    Then Service Status code should be 200
      And Service Response should be in json format
      And the GraphQL response should have property "data.createLead.id"
      And the GraphQL response should have property "data.createLead.accountId" equal to "c6a5de7a-48db-4f62-b111-218ca21ecadd"
