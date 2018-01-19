@CRM @API @GraphQL
Feature: CRM Api GraphQL

  @RO
  Scenario: Malformed payload
    Given the CRM Service Endpoint
      And the Service Method "POST"
      And the Service Header "content-type" set to "application/json"
      And the Service Body "{}"
    When I call the Service
    Then Service Status code should be 200
      And Service Response should be in json format
      And the GraphQL response should have property "errors"
