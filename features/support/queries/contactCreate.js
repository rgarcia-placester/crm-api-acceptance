/**
 * Test data to run this lambda function in a lambda-local environment. To execute run:
 * cd ./services/api
 * npm install (if you haven't already)
 * npm run run_lambda -- -l ./src/index.js -h handler -e ./lambda_local/pl-internal/test-event-create-contact.js
 */

module.exports = {
  "query":
    `mutation createContact($contactInput: ContactInput!) {
      createContact(contactInput: $contactInput) {
        accountId,
        accountGroupId,
        id,
        audienceId,
        assignmentId,
        firstName,
        lastName,
        primaryEmail,
        primaryPhone,
        streetAddress,
        zipCode,
        crmEntityType,
        new,
        contacted,
        sourceInstanceId,
        groupId,
        minPrice,
        maxPrice,
        interestedInZipCodes,
        meta {
          metaKey,
          metaValue
        },
        email {
          email,
          label,
        },
        phone {
          phone
          label
        }
      }
    }`,
  "variables": {
    "contactInput": {
      "accountId": "c6a5de7a-48db-4f62-b111-218ca21ecaff",
      "audienceId": "1",
      "firstName": "Igor",
      "lastName": "graphql create",
      "primaryEmail": "graphql.create@gmail.com",
      "primaryPhone": "890-123-4567",
      "streetAddress": "W Monroe St",
      "zipCode": "60606",
      "crmEntityType": "RENTER",
      "new": "true",
      "contacted": "true",
      "sourceInstanceId": "8d45e0af-2f7b-4e20-abfa-a5833527667e",
      "groupId": "854f6684-4dc3-43df-b84d-509921d1747f",
      "minPrice": "1234.56",
      "maxPrice": "5678.9",
      "interestedInZipCodes": "60601, 60606",
      "unit": "230",
      "city": "Chitown",
      "state": "IL",
      "neighborhood": "Loop",
      "county": "IL",
      "score": "GREEN",
      "meta": [
        {
          "metaKey": "img",
          "metaValue": "some_file_location_on_s3"
        },
        {
          "metaKey": "DJ Smash",
          "metaValue": "Moscow Never Sleeps"
        }],
      "email": [
        {
          "email": 'dgtest@test.com'
        }
      ],
      "phone": [
        {
          "phone": '5555551212'
        }
      ]
    }
  }
};
