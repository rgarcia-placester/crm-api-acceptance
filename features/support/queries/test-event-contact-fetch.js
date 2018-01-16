/**
 * Test data to run this lambda function in a lambda-local environment. To execute run:
 * cd ./services/api
 * npm install (if you haven't already)
 * ENV_FILE_PATH=/Users/[your path here]/CRM-Services-API/services/api/.env NODE_ENV=local npm run run_lambda -- -l ./src/index.js -h handler -e ./lambda_local/pl-internal/test-event-contact-fetch.js
 */

module.exports = {
  "query":"query getContact($contactFetchInput: ContactFetchInput!) {  contact(        contactFetchInput: $contactFetchInput  ) {      id      primaryEmail      primaryPhone      firstName      lastName      isNew      contacted      assignmentName      score      sourceInstanceId      crmEntityType      groupId      unit      streetAddress      city      state      zipCode      neighborhood      county      createDate      interestedInZipCodes      minPrice      maxPrice      meta {        id        contactId        metaKey        metaValue      }      email {        id        contactId        email        label      }      phone {        id        contactId        phone        label      }      audienceId      audiences {        id        audience      }  }}",
  "variables": {
    "contactFetchInput": {
      "accountId": "6866ea72-9619-4ddb-a6ad-cf4f23060977",
      "id": "1215504f-a17f-4d68-b787-f97d3870bea4"
    }
  }
};
