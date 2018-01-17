/**
 * Test data to run this lambda function in a lambda-local environment. To execute run:
 * cd ./services/api
 * npm install (if you haven't already)
 * npm run run_lambda -- -l ./src/index.js -h handler -e ./test/test-event-contacts.js
 */

module.exports = {
  "query":
    `query getContacts($contactsInput: ContactsInput!, $page: Page, $sort: SortRule, $filtersInput: FiltersInput) {
      contacts(
        contactsInput: $contactsInput,
        page: $page,
        sort: $sort,
        filtersInput: $filtersInput
      ) {
        total
        items {
          id
          fullName
          primaryEmail
        }
      }
    }`,
  "variables": {
    "contactsInput": {
      "accountId": "6866ea72-9619-4ddb-a6ad-cf4f23060977",
    },
    "page": {
      "limit": 10,
      "offset": 0
    },
    "sort": {
      "field": "createDate",
      "order": "desc"
    }
  }
};
