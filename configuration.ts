import { Config, browser } from 'protractor';
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

export let config: Config = {
  // Selenium server URL.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  specs: ['envioui-spec.js'], // Testcase file

  
  onPrepare: function () {
    browser.driver.manage().window().maximize();
    //HTML report thet will include screenshots of each test
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
  }

};