/**
 * Test data to run this lambda function in a lambda-local environment. To execute run:
 * cd ./services/api
 * npm install (if you haven't already)
 * npm run run_lambda -- -l ./src/index.js -h handler -e ./lambda_local/pl-internal/test-event-lead-fetch.js
 */

module.exports = {
  "query":
  `query getLead($leadFetchInput: LeadFetchInput!) {
      lead(
        leadFetchInput: $leadFetchInput
      ) {
        id
        fullName
        firstName
        lastName
        contacted
        primaryEmail
        primaryPhone
        isNew
        sourceInstanceName
        sourceInstanceId
        createDate
        assignmentName
        crmEntityType
        score
        groupName
        groupId
        minPrice
        maxPrice
        interestedInZipCodes
        tags{
          name
          preferredCategory
        }
      }
    }`,
  "variables": {
    "leadFetchInput": {
      "accountId": "f44c373e-68af-4a31-be38-b3f96033699d",
      "id": "9346d91c-6756-42f8-a0aa-7d0a55e4adf4"
    }
  }
};
