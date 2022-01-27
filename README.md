## Automation Testing Fitogram Web

>This example project has the goal of automate the Fitogram Sign Up feature


## Prerequisites

Execute the following commands in the project root path to install Cypress and MailSlurp

```sh
npm install cypress --save-dev
npm install --save-dev cypress-mailslurp
```

## The project directory structure
​
The project has the suggested folder structure with custom commands that allow to split the single responsability and the open - close principle (SOLID)
```Gherkin

/cypress
    /fixtures
    - signup.json

  /integration
    - sign-up.spec.js
    
  /plugins
    - index.js

  /support
    /pages
        - sign-up-page
    commands
    index
cypress.json
```
The folder Fixtures store the JSON files that allow manage the data in the project
The folder Integration store all the spec (test files)
The folder support store the custom commands and the pages (UI elements)
The file cypress.json manage the general settings of the project

##  Run The Automation

The project can be run locally, executing the command:
```sh
npx cypress run --record --key 6c36409e-fe4f-49cd-8015-1679552cf9c8
```
You can see the evidence locally, however, there are a Dashboard connected with the project, for track the different runners of the project and collect important metrics that allow take decisions early.

Is mandatory receive the invitation shared through e-mail to see the Dashboard.

##  Used Tools
 
* [Cypress](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell)  
* [MailSlurp](https://www.mailslurp.com/guides/getting-started/)

>Author:  
>  Juan Duarte