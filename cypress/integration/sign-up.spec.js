import SignUpPage from '../support/pages/sign-up-page';

const signUpPage = new SignUpPage();

before('load data', () => {
    cy.fixture('signup')
        .then(function (signup) {
            this.signup = signup;
        });
});

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
        cy.FillSignUpStudioForm(this.signup.studioName, this.signup.kindStudio, this.signup.location,
            this.signup.aggregator);
        cy.FillPersonalDetails(this.signup.firstName, this.signup.lastName, this.signup.password);
    });

    it('Registration not succesfully for name studio duplicated', function () {
        cy.FillSignUpStudioFormDuplicated(this.signup.studioNameDuplicated, this.signup.kindStudio,
            this.signup.location, this.signup.aggregator);
    });

    it('Registration not succesfully for email with wrong format', function () {
        cy.FillSignUpStudioForm(this.signup.studioName, this.signup.kindStudio, this.signup.location,
            this.signup.aggregator);
        cy.FillPersonalDetailsWrongEmail(this.signup.firstName, this.signup.lastName,
            this.signup.wrongEmail, this.signup.password);
    });

    it('Sign Up failed', function () { // This test case failed to see errors in the report
        cy.FillSignUpStudioForm(this.signup.studioName, this.signup.kindStudio, this.signup.location,
            this.signup.aggregator);
        signUpPage.getFirtsName().should('be.disabled');
    });

});