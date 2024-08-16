class CadastroPage {
    selectorsList(){
        const selectors = {
            buttonRegister: "[data-test='register-button']",
            usernameField: "[data-test='input-name']",
            emailField: "[data-test='input-email']",
            passwordField: "[data-test='input-password']",
            confirmPassword: "[data-test='input-confirm-password']",
            buttonCadastro: "[data-test='submit-button']",
        }
        return selectors
    }

    accessCadastro(){
       cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
    }

    buttonRegister(){
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get(this.selectorsList().buttonRegister).click()   
    }

    correctRegistrationInit(){
        const selectors = this.selectorsList()
        cy.get(selectors.usernameField).type('Bruno')
        cy.get(selectors.emailField).type('brunosr099@outlook.com')
        cy.get(selectors.passwordField).type('Senha1234')    
        cy.get(selectors.confirmPassword).type('Senha1234')
    }     
    
    buttonCadastration(){
        cy.get(this.selectorsList().buttonCadastro).click()
    }

    incorrectRegistration(){          
        cy.contains('É necessário informar um endereço de email').should('be.visible')  
        cy.contains('Crie uma senha').should('be.visible') 
        cy.contains('Repita a senha criada acima').should('be.visible')
    }
}
export default CadastroPage