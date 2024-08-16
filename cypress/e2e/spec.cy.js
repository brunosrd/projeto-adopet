import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import CadastroPage from '../pages/cadastroPage'
import userData  from '../fixtures/user-data.json'
import { commands } from '../support/commands';


const loginPage = new LoginPage()
const homePage = new HomePage()
const cadastroPage = new CadastroPage()


describe('AdoPet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
  it('Registration - Success', () => {
    cadastroPage.buttonRegister()
    cy.cadastrar(userData.nome, userData.email, userData.password, userData.password) //commands

    // cadastroPage.buttonRegister()
    // cadastroPage.correctRegistrationInit()
    // verificar
  })
  
  it('Registration - Failed', () =>{
    cadastroPage.buttonRegister()
    cadastroPage.buttonCadastration()
    cadastroPage.incorrectRegistration()
    //verificar
  })

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    cy.login(userData.email, userData.password) //commands
    
    // loginPage.accessLoginPage()
    // loginPage.loginSuccessfully()               //pages
    // cadastroPage.buttonCadastration()
    //verificar
  })
  
  it('Login - Failed', () => {
    loginPage.accessLoginPage()
    loginPage.loginInvalid()

  })


  it('Check text message', () =>{
    cy.get('.header__message').click();
    cy.login('ana@email.com','Senha123');    
  })
  it('Check images of animals', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.cards').should('be.visible');
  
  })

  it('Visit website pages', () => {
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