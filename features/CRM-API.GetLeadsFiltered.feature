@CRM @API @Leads @Filter
Feature: CRM Api Leads Filter

  @RO
  Scenario Outline: Get Leads Filtered
    Given the CRM Service Endpoint
      And the GraphQL query "<query>"
    When I call the Service
    Then Service Status code should be 200
      And Service Response should be in json format
      And the GraphQL response should have property "data.leads.total"
      And the GraphQL response should have property "<property>" equal to "<expect>"

    Examples:
      | query                        | property                          | expect  |
      | leadsFilteredByScore         | data.leads.items[0].score         | GREEN   |
      | leadsFilteredByCRMEntityType | data.leads.items[0].crmEntityType | RENTER  |