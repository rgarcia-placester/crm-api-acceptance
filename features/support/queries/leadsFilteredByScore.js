
module.exports = {
  "query":
    `query getLeads($leadsInput: LeadsInput!, $page: Page, $filtersInput: FiltersInput) {
      leads(
        leadsInput: $leadsInput,
        page: $page,
        filtersInput: $filtersInput
      ) {
        total
        items {
          id
          fullName
          score
        }
      }
    }`,
  "variables": {
    "leadsInput": {
      "accountId": "c6a5de7a-48db-4f62-b111-218ca21ecadd",
    },
    "page": {
      "limit": 1,
      "offset": 0
    },
    "filtersInput": {
      "filters": [
        {
          "field": "score",
          "operator": "in",
          "value": ["green"]
        }
      ]
    }
  }
};
