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
        primaryEmail
      }
  }`,
  "variables": {
    "leadFetchInput": {
      "accountId": "c6a5de7a-48db-4f62-b111-218ca21ecadd",
      "id": "9fd214c0-fbbf-11e7-943b-b7a799aad205"
    }
  }
};
