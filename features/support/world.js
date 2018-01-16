// features/support/world.js
const { setWorldConstructor } = require('cucumber')
const Browser                 = require('zombie')

class CustomWorld {
  constructor() {
    this.variable = 0
    this.browser  = new Browser({ runScripts: false })
  }

  setTo(number) {
    this.variable = number
  }

  incrementBy(number) {
    this.variable += number
  }
}

setWorldConstructor(CustomWorld)
