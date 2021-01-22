"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angularHomePageObjects = void 0;
const protractor_1 = require("protractor");
class angularHomePageObjects {
    //Locators for Todo list/landing/home page
    constructor() {
        this.textData = protractor_1.element(protractor_1.by.css("input[placeholder='Enter Todo']"));
        this.submitButton = protractor_1.element(protractor_1.by.buttonText('Add Todo'));
        this.readdata = protractor_1.element.all(protractor_1.by.xpath("//span[@ng-dblclick='enterEditMode()']/span")).last();
    }
}
exports.angularHomePageObjects = angularHomePageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY0hvbWVQYWdlT2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL3NwZWNIb21lUGFnZU9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQW9EO0FBRXBELE1BQWEsc0JBQXNCO0lBTW5DLDBDQUEwQztJQUMxQztRQUVBLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUYsQ0FBQztDQUVBO0FBZkQsd0RBZUMifQ==