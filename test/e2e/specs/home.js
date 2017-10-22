
module.exports = {
  '.hero section': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hero')
      .assert.containsText('.silver-line', 'Hello.')
      .assert.elementCount('img', 0)
      .end()
  },

  '.root section:header': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('.header-h1', 'The Internet is here to stay')
      .end()
  },

  'nav is on home page': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('.nav li', 'God')
      .end()
  }
}
