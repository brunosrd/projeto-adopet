class CadastroPage {
    selectorsList(){
        const selectors = {
            buttonRegister: "[data-test='register-button']",
            usernameField: "[data-test='input-name']",
            emailField: "[data-test='input-email']",
            passwordField: "[data-test='input-password']",
            confirmPassword: "[data-test='input-confirm-password']",
        }
        return selectors
    }

    accessCadastro(){
       cy.visit('/cadastro')
    }

    buttonRegister(){
        cy.get(this.selectorsList().buttonRegister).click()   
    }

    correctRegistrationInit(){
        const selectors = this.selectorsList()
        cy.get(selectors.usernameField).type('Bruno')
        cy.get(selectors.emailField).type('brunos@teste.com')
        cy.get(selectors.passwordField).type('Senha199')    
        cy.get(selectors.confirmPassword).type('Senha199')
    }     
    

    incorrectRegistration(){          
        cy.contains('É necessário informar um endereço de email').should('be.visible')  
        cy.contains('Crie uma senha').should('be.visible') 
        cy.contains('Repita a senha criada acima').should('be.visible')
    }
}
export default CadastroPage