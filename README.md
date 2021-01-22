# EnvioTodoUIProject
Envio UI Todo list project- This is test automation framework designed using Protractor, Jasmine and TypeScript 

Implementation details: 

Pre-requisites 

1.Download and install Chrome or Firefox browser. 

2.Download and install Node.js and install Visual studio Code 

3.Install Protractor: npm install -g protractor  

4.Update binaries of webdriver-manager: npm install -g webdriver-manager 

5.Go to Project root directory and install Dependency: npm install 

6.All the dependencies from package.json would be installed in node_modules . 

Project Description: 

This automation framework designed using Protractor, Jasmine and TypeScript. Page object model design patterns is used for easy maintenance of code. 
Package.json file takes care of dependency inclusion and final result can be seen in jasmine report. 

How to Run Test using visual studio code: 

Since the code written in typescript, it needs to convert into Java script using command: tsc 

Test suite can be run using command: protractor JSfiles/configuration.js 

Test scenario implemented: 

1.Verify that dynamically generated Todo list contains the text which is entered in text box and submitted by clicking Todo button. 
 

 

 

 
 
 
