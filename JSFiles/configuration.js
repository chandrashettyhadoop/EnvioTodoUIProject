"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    // Selenium server URL.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['envioui-spec.js'],
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
        //HTML report thet will include screenshots of each test
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
        }));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTZDO0FBQzdDLElBQUksb0JBQW9CLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFFN0QsUUFBQSxNQUFNLEdBQVc7SUFDMUIsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBRSw4QkFBOEI7SUFFL0MsYUFBYSxFQUFFLElBQUk7SUFFbkIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsS0FBSyxFQUFFLENBQUMsaUJBQWlCLENBQUM7SUFHMUIsU0FBUyxFQUFFO1FBQ1Qsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsd0RBQXdEO1FBQ3hELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQzFCLElBQUksb0JBQW9CLENBQUM7WUFDdkIsUUFBUSxFQUFFLG9CQUFvQjtTQUMvQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FFRixDQUFDIn0=