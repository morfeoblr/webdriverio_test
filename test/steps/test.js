/* global browser,expect,assert */
const { defineSupportCode } = require('cucumber');
const assert = require('assert');

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I open the base url$/, () => {
    browser.url('https://webdriver.io');
  });

  Given(/^I open the base url2$/, () => {
    const title = browser.getTitle();
    assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });
});
