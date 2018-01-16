/**
 * Test data to run this lambda function in a lambda-local environment. To execute run:
 * cd ./services/api
 * npm install (if you haven't already)
 * npm run run_lambda -- -l ./src/index.js -h handler -e ./lambda_local/pl-internal/test-event-update-lead.js
 */

module.exports = {
  "query":
    `mutation updateLead($leadInput: LeadInput!) {
      updateLead(leadInput: $leadInput) {
        accountId,
        id,
        audienceId,
        firstName,
        lastName,
        primaryEmail
      }
    }`,
  "variables": {
    "leadInput": {
      "accountId": "c6a5de7a-48db-4f62-b111-218ca21ecadd",
      "id": "3ab17f20-9be0-11e7-9b20-2d4dde2875a9",
      "audienceId": "3",
      "firstName": "Igor Updated",
      "lastName": "graphql updated",
      "primaryEmail": "graphql.updated@gmail.com",
      "phone": [
        {
          "phone": "8474455777",
          "label": "home"
        }
      ]
    }
  }
};
