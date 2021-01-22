import {ElementFinder,element,by} from 'protractor';

export class angularHomePageObjects
{
    textData:ElementFinder;
    submitButton:ElementFinder;
    readdata:ElementFinder;

//Locators for Todo list/landing/home page
constructor()
{
this.textData=element(by.css("input[placeholder='Enter Todo']"));

this.submitButton=element(by.buttonText('Add Todo'));
this.readdata=element.all(by.xpath("//span[@ng-dblclick='enterEditMode()']/span")).last();
}

}