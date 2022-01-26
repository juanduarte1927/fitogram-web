import SignUpPage from '../support/pages/sign-up-page';
import 'cypress-mailslurp';

const signUpPage = new SignUpPage();

Cypress.Commands.add('FillSignUpStudioForm', (studioName, kindStudio, location, aggregator) => {
    signUpPage.getStudioName().type(studioName + Math.floor(Math.random() * 100) + 1);
       signUpPage.getKindStudio().click({force: true});
        cy.contains(kindStudio).click();
        signUpPage.getStudioLocation().click();
        cy.contains(location).click();
        signUpPage.getAggregatorList().click();
        signUpPage.getContinueBtn().should('be.disabled');
        cy.contains(aggregator).click();
        cy.wait(1000)
        signUpPage.getContinueBtn().click({force: true});
});

Cypress.Commands.add('FillPersonalDetails', function (firstName, lastName, password) {
        signUpPage.getFirtsName().type(firstName);
        signUpPage.getLastName().type(lastName);
        cy.getNewEmail();
        signUpPage.getPassword().type(password);
        signUpPage.getCreateStudioBtn().should('be.disabled');
        signUpPage.getCheckTerms().click();
        cy.wait(2000)
        signUpPage.getCreateStudioBtn().click({force: true});
        cy.wait(7000)
        cy.contains(firstName + ' ' + lastName).should('be.visible');
});

Cypress.Commands.add('getNewEmail', function () {
    cy.mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
            cy.wrap(inbox.id).as('inboxId');
            signUpPage.getEmail().type(inbox.emailAddress);
        });
});

Cypress.Commands.add('FillSignUpStudioFormDuplicated', (studioNameDuplicated, kindStudio, location, aggregator) => {
    signUpPage.getStudioName().type(studioNameDuplicated);
       signUpPage.getKindStudio().click({force: true});
        cy.contains(kindStudio).click();
        signUpPage.getStudioLocation().click();
        cy.contains(location).click();
        signUpPage.getAggregatorList().click();
        cy.contains(aggregator).click();
        cy.wait(1000);
        signUpPage.getContinueBtn().should('be.disabled');
});

Cypress.Commands.add('FillPersonalDetailsWrongEmail', function (firstName, lastName, wrongEmail, password) {
    signUpPage.getFirtsName().type(firstName);
    signUpPage.getLastName().type(lastName);
    signUpPage.getEmail().type(wrongEmail);
    signUpPage.getPassword().type(password);
    signUpPage.getCheckTerms().click();
    cy.contains('Invalid email address').should('be.visible');
    cy.wait(1000);
    signUpPage.getCreateStudioBtn().should('be.disabled');
    
});
