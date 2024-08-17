class LoginPage {
    selectorsList(){
        const selectors = {
            email: "[data-test='input-loginEmail']",
            password: "[data-test='input-loginPassword']",
            buttonLogin: "[data-test='submit-button']",
        }
        return selectors
    }

    accessLoginPage(){
        cy.visit('/login')
    }

    buttonToEnter(){
        cy.get(this.selectorsList().buttonLogin).click()
    }
    loginSuccessfully(){
        const selectors = this.selectorsList();
        cy.get(selectors.email).type('brunosr099@outlook.com');
        cy.get(selectors.password).type('Senha1234');
    }

    loginInvalid(){
        const selectors = this.selectorsList();
        cy.get(selectors.email).type('dfasdf');
        cy.get(selectors.password).type('123');
        cy.get(selectors.buttonLogin).click()
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    }

    loginErrorMessage(){
        cy.get(this.selectorsList().email).click()
        cy.get(this.selectorsList().password).click()
        cy.get(this.selectorsList().buttonLogin).click()
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
    }

}
export default LoginPage