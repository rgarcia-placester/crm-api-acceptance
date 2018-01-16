/**
 * Test data to run this lambda function in a lambda-local environment. To execute run:
 * cd ./services/api
 * npm install (if you haven't already)
 * npm run run_lambda -- -l ./src/index.js -h handler -e ./test/test-event-filter.js
 */

module.exports = {
  "query":
    `query getLeads($leadsInput: LeadsInput!, $page: Page, $sort: SortRule, $filtersInput: FiltersInput) {
      leads(
        leadsInput: $leadsInput,
        page: $page,
        sort: $sort,
        filtersInput: $filtersInput
      ) {
        total
        items {
          id
          fullName
          primaryEmail
          primaryPhone
          isNew
          leadSourceInstanceName
          sourceInstanceName
          createDate
          assignmentName
          crmEntityType
          leadType
          score
          groupName
          unit
          streetAddress
          city
          state
          zipCode
          neighborhood
          county
        }
      }
    }`,
  "variables": {
    "leadsInput": {
      "accountId": "c6a5de7a-48db-4f62-b111-218ca21ecadd",
      "query": "placester"
    },
    "page": {
      "limit": 10,
      "offset": 0
    },
    "sort": {
      "field": "createDate",
      "order": "desc"
    },
    "filtersInput": {
      "filters": [
        {
          "field": "leadSourceInstanceName",
          "operator": "in",
          "value": [
            "Dave Gehrett",
            "Import",
            "None"
          ]
        },
        {
          "field": "score",
          "operator": "in",
          "value": [
            "yellow",
            "None"
          ]
        }
      ]
    }
  }
};
