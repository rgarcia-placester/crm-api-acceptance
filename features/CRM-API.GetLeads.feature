@CRM @API @Leads
Feature: CRM Api GetLeads Query

  Scenario: Get Leads
    Given the Service Endpoint "https://crm-api.pl-internal.com/v1"
      And the Service Method "POST"
      And the Service Header "content-type" set to "application/json"
      And the Service Body "{}"
    When I call the Service
    Then Service Status code should be 200
      And Service Response should be in json format
      And Service Response Header "content-type" should be "application/json"
      And Service Response Body should be "ẗest"
