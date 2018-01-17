# CRM-Services-API Acceptance

## Overview
CRM Service API Acceptance consists of a collection of acceptance tests.

## Installation
```
$ npm install
```

## Run Acceptance

### Run all Acceptance Test
```
$ npm run test:acceptance
```

### Run all Acceptance Test filtered by tag
```
$ npm run test:acceptance -- -t tag
```

```
ex: $ npm run test:acceptance -- -t '@Leads and @RO'
```

## Writing a new Acceptance
Add a new file into the features directory, you need write the Test in Gherkin
format. You can use all steps defined into features/steps directory, or write
your own steps.

If you need to test a GraphQL query, you can add it to features/support/queries,
so you can reference it by name. 
