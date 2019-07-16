/* global $, browser,expect,assert */
const { defineSupportCode } = require('cucumber');
const assert = require('assert');

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I open the base url$/, () => {
    browser.url('https://www.skyscanner.net/');
  });

  Given(/^I open the base url2$/, () => {
    const title = browser.getTitle();
    const locales = $('div[class*="CultureSelectorButton"]');
    locales.click();
    // $('div[class*="bpk-modal__content"]').waitForDisplayed();
    const culture = $('#culture-selector-locale');
    culture.click();
    // $('option[value="en-US"]').waitForDisplayed();
    $('option[value="en-US"]').click();
    $('#culture-selector-save').click();
    const selectedLocale = locales.getText();
    assert.strictEqual(selectedLocale, 'English (US)');
  });
});
