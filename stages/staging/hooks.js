const {After, Before, BeforeAll} = require('cucumber');

Before(function() {
    this.config = {
        crm: { endpoint: "https://crm-api.pl-internal.com/v1" }
    }
});

