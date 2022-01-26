import SignUpPage from '../support/pages/sign-up-page';
import 'cypress-mailslurp';

const signUpPage = new SignUpPage();

Cypress.Commands.add('FillSignUpStudioForm', () => {
    signUpPage.getStudioName().type('Automatic Studio Name' + Math.floor(Math.random() * 100) + 1);
       signUpPage.getKindStudio().click({force: true});
        cy.contains('Dance').click();
        signUpPage.getStudioLocation().click();
        cy.contains('France').click();
        signUpPage.getAggregatorList().click();
        signUpPage.getContinueBtn().should('be.disabled');
        cy.contains('OneFit').click();
        cy.wait(1000)
        signUpPage.getContinueBtn().click({force: true});
});

Cypress.Commands.add('FillPersonalDetails', function () {
        signUpPage.getFirtsName().type('Juan');
        signUpPage.getLastName().type('Duarte');
        cy.getNewEmail();
        signUpPage.getPassword().type('Asdf123');
        signUpPage.getCreateStudioBtn().should('be.disabled');
        signUpPage.getCheckTerms().click();
        cy.wait(2000)
        signUpPage.getCreateStudioBtn().click({force: true});
        cy.wait(7000)
        cy.contains('Juan Duarte').should('be.visible');
});

Cypress.Commands.add('getNewEmail', function () {
    cy.mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
            cy.wrap(inbox.id).as('inboxId');
            signUpPage.getEmail().type(inbox.emailAddress);
        });
});

Cypress.Commands.add('FillSignUpStudioFormDuplicated', () => {
    signUpPage.getStudioName().type('hola');
       signUpPage.getKindStudio().click({force: true});
        cy.contains('Dance').click();
        signUpPage.getStudioLocation().click();
        cy.contains('France').click();
        signUpPage.getAggregatorList().click();
        cy.contains('OneFit').click();
        cy.wait(1000);
        signUpPage.getContinueBtn().should('be.disabled');
});

Cypress.Commands.add('FillPersonalDetailsWrongEmail', function () {
    signUpPage.getFirtsName().type('Juan');
    signUpPage.getLastName().type('Duarte');
    signUpPage.getEmail().type('wrong@email');
    signUpPage.getPassword().type('Asdf123');
    signUpPage.getCheckTerms().click();
    cy.contains('Invalid email address').should('be.visible');
    cy.wait(1000);
    signUpPage.getCreateStudioBtn().should('be.disabled');
    
});
