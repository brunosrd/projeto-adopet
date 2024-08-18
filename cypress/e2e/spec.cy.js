import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import CadastroPage from '../pages/cadastroPage'
import {usuarios}   from '../fixtures/user-data.json'


const loginPage = new LoginPage()
const homePage = new HomePage()
const cadastroPage = new CadastroPage()


describe('AdoPet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get("[data-test='login-button']").click()
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', { //URL no console do inspecionar da frase do erro
      statusCode: 400, 
      body: { message: 'Falha no login. Consulte suas credenciais.' }
    }).as('stubPost')   
      
  })

  it('Registration - Success', () => {
    cadastroPage.accessCadastro()
    cadastroPage.correctRegistrationInit()
    loginPage.buttonToEnter()
  })
  
  it('Registration - Failed', () =>{
    cadastroPage.accessCadastro()
    loginPage.buttonToEnter()
    cadastroPage.incorrectRegistration()
  })

  it.only('Login - Success', () => {
    loginPage.loginSuccessfully()              
    loginPage.buttonToEnter()
    loginPage.checkLoginSuccessfuly()
  })
  
  it('Login - Failed', () => {
    loginPage.accessLoginPage()
    loginPage.loginInvalid()

  })

  it('Deve falhar mesmo se preenchido corretamente', () => {
    loginPage.loginSuccessfully()
    loginPage.buttonToEnter()  
    cy.wait('@stubPost', { timeout: 10000 }).its('response.statusCode').should('eq', 400);
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
  })

  it('Verifique a mensagem de erro de login', () => {
    loginPage.accessLoginPage()
    loginPage.loginErrorMessage()
  })

  it('Verifique a mensagem de texto', () =>{
    cy.get('.header__message').click();
    cy.login('ana@email.com','Senha123');    
  })
  it('Confira imagens de animais', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.cards').should('be.visible');
  
  })

  it('Visite as páginas do site', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get("[href='/home']").click()
    cy.url().should('include', '/home')
    cy.get("[aria-label='Tela inicial']").click()
    cy.get("[alt='Logo AdoPet']")
    loginPage.accessLoginPage()
    loginPage.loginSuccessfully()
    homePage.accessHomePage()

  })
})