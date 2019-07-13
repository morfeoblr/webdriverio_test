module.exports = {
  api: process.env.api || '???',
  env: process.env.account || 'skyscanner',
  domain: process.env.domain || 'net',
  suite: process.env.suite || 'default',
  maxInstances: process.env.maxInstances || 10,
  browser: process.env.browser || 'chrome',
};
