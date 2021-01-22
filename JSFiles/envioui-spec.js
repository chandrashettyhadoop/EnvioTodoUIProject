"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const specHomePageObjects_1 = require("./pageObjects/specHomePageObjects");
describe('homepage', function () {
    var using = require("jasmine-data-provider");
    var data = require("../data.js"); // To load data available in data provider
    beforeAll(function () {
        protractor_1.browser.get('http://rohitghatol.github.io/AngularJs-TodoApp/');
    });
    //Parameterization using Jasmine data provider
    using(data.Datadriven, function (data, description) {
        it('add a todo', () => __awaiter(this, void 0, void 0, function* () {
            let obJHome = new specHomePageObjects_1.angularHomePageObjects();
            yield obJHome.textData.sendKeys(data.text);
            yield obJHome.submitButton.click();
            //Getting text associacted with dynamically generated Todo list
            let actualtext = yield obJHome.readdata.getText();
            //Assertions to confirm Todo list is populated with text entered in text box
            expect(data.text).toBe(actualtext);
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aW91aS1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vZW52aW91aS1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELDJFQUEyRTtBQUUzRSxRQUFRLENBQUMsVUFBVSxFQUFFO0lBRW5CLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzdDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLDBDQUEwQztJQUU1RSxTQUFTLENBQUM7UUFDUixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0lBRWpFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsOENBQThDO0lBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsSUFBSSxFQUFFLFdBQVc7UUFDaEQsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFTLEVBQUU7WUFFMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSw0Q0FBc0IsRUFBRSxDQUFDO1lBRTNDLE1BQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVuQywrREFBK0Q7WUFDL0QsSUFBSSxVQUFVLEdBQUcsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xELDRFQUE0RTtZQUM1RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUVwQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyJ9