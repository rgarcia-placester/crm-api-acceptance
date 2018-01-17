// features/support/world.js
const { setWorldConstructor } = require('cucumber')
const Browser                 = require('zombie')
const queries                 = require('./queries')

class CustomWorld {
  constructor() {
    this.browser  = new Browser({ runScripts: false })
    this.queries  = queries;
  }
}

setWorldConstructor(CustomWorld)
