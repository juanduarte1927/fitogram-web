class SignUpPage {
    getStudioName() {
        return cy.get('input[placeholder="Studio name"]');
    }
    
    getKindStudio() {
        return cy.get(':nth-child(6) > .css-1r01ljd-control');
    }
    
    getStudioLocation() {
        return cy.get(':nth-child(8) > .css-1r01ljd-control');
    }

    getAggregatorList() {
        return cy.get(':nth-child(10) > .css-1r01ljd-control');
    }
    
    getContinueBtn() {
        return cy.get('[type="submit"]');
    }

    getFirtsName() {
        return cy.get('[name="firstName"]');
    }

    getLastName() {
        return cy.get('[name="lastName"]');
    }

    getEmail() {
        return cy.get('[name="email"]');
    }

    getPassword() {
        return cy.get('[name="password"]');
    }
    
    getCheckTerms() {
        return cy.get('.css-18oo47v');
    }
    
    getCreateStudioBtn() {
        return cy.get('.studio-button');
    }
    
}

export default SignUpPage;