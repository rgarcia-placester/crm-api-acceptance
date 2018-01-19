module.exports = {
  "query":
    `mutation createLead($leadInput: LeadInput!) {
      createLead(leadInput: $leadInput) {
        accountId,
        accountGroupId,
        id,
        audienceId,
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
        }
      }
    }`,
  "variables": {
    "leadInput": {
      "accountId": "c6a5de7a-48db-4f62-b111-218ca21ecadd",
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
      "interestedInZipCodes": ["60601", "60606"],
      "unit": "230",
      "city": "Chitown",
      "state": "IL",
      "neighborhood": "Loop",
      "county": "IL",
      "score": "GREEN",
      "meta": [
        {
          "metaKey": "img",
          "metaValue": "some_file_location_on_s3_for_leads"
        },
        {
          "metaKey": "DJ Smash",
          "metaValue": "Moscow Never Sleeps for leads"
        }]
    }
  }
};
