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
        }
      }
    }`,
  "variables": {
    "leadsInput": {
      "accountId": "c6a5de7a-48db-4f62-b111-218ca21ecadd",
      "query": "graphql.create@gmail.com"
    },
    "page": {
      "limit":  1,
      "offset": 0
    },
    "sort": {
      "field": "createDate",
      "order": "desc"
    }
  }
}
