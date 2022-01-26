import SignUpPage from '../support/pages/sign-up-page';

const signUpPage = new SignUpPage();

describe('User wants to sign up in Fitogram', () => {

    beforeEach('load onboarding url', () => {
        cy.visit('/onboarding', {
            onBeforeLoad(win) {
              Object.defineProperty(win.navigator, 'language', { value: 'en-US' });
              Object.defineProperty(win.navigator, 'languages', { value: ['en'] });
              Object.defineProperty(win.navigator, 'accept_languages', { value: ['en'] });
            },
            headers: {
              'Accept-Language': 'en',
            },
        });
    });
    
    it('Registration succesfully', function () {
       cy.FillSignUpStudioForm();
       cy.FillPersonalDetails();
    });

    it('Registration not succesfully for name studio duplicated', function () {
        cy.FillSignUpStudioFormDuplicated();
    });

    it('Registration not succesfully for email with wrong format', function () {
        cy.FillSignUpStudioForm();
        cy.FillPersonalDetailsWrongEmail();
    });

});