@CRM @API @GraphQL
Feature: CRM Api GraphQL

  Scenario: Malformed payload
    Given the Service Endpoint "https://crm-api.pl-internal.com/v1"
      And the Service Method "POST"
      And the Service Header "content-type" set to "application/json"
      And the Service Body "{}"
    When I call the Service
    Then Service Status code should be 200
      And Service Response should be in json format
      And Service Response Body should be '{"errors":[{"message":"Syntax Error GraphQL request (1:1) Unexpected <EOF>\n\n1: \n   ^\n","locations":[{"line":1,"column":1}]}]}'
