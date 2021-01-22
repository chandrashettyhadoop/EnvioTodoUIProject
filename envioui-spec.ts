import { browser, element, by } from 'protractor';
import { angularHomePageObjects } from './pageObjects/specHomePageObjects';

describe('homepage', function () {

  var using = require("jasmine-data-provider");
  var data = require("../data.js"); // To load data available in data provider

  beforeAll(function () {
    browser.get('http://rohitghatol.github.io/AngularJs-TodoApp/');

  });
//Parameterization using Jasmine data provider
  using(data.Datadriven, function (data, description) {
    it('add a todo', async () => {

      let obJHome = new angularHomePageObjects();

      await obJHome.textData.sendKeys(data.text);
      await obJHome.submitButton.click();

      //Getting text associacted with dynamically generated Todo list
      let actualtext = await obJHome.readdata.getText(); 
      //Assertions to confirm Todo list is populated with text entered in text box
      expect(data.text).toBe(actualtext)

    });
  });

});