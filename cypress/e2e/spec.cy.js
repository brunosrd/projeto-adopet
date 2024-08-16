import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import CadastroPage from '../pages/cadastroPage'

const loginPage = new LoginPage()
const homePage = new HomePage()
const cadastroPage = new CadastroPage()


describe('AdoPet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
  it('Registration - Success', () => {
    cadastroPage.buttonRegister()
    cadastroPage.correctRegistrationInit()
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
    loginPage.loginSuccessfully()
    cadastroPage.buttonCadastration()
    //verificar
  })
  
  it('Login - Failed', () => {
    loginPage.accessLoginPage()
    loginPage.loginInvalid()

  })


  it('Visitar páginas do site', () => {
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