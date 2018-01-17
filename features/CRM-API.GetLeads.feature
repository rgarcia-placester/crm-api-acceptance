@CRM @API @Leads
Feature: CRM Api GetLeads Query

  @RO @Staging
  Scenario: Get Leads
    Given the Service Endpoint "https://crm-api.pl-internal.com/v1"
      And the GraphQL query "leads"
    When I call the Service
    Then Service Status code should be 200
      And Service Response should be in json format
      And the GraphQL response should have property "data.leads.total"
      And the GraphQL response should have property "data.leads.items"
