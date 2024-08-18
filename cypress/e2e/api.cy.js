import { expect } from "chai"

describe('Api Adopet', () => {
    
    it('Mensagens da API', () => {
        cy.request({    //metodo que recebe propriedades
            method:'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/a4465c1a-761c-431d-adeb-79aa10db290e',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200) //vai esperar uma resposta do status e essa resposta precisa ser igual a 200
            expect(res.body).is.not.empty    //espera que o body da requisição não seja vazio
            expect(res.body).to.have.property('msg') //espera que o body traga a propriedade que tenha no nde msg
        })
    })

    it('Nome do perfil', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/5f29c3c2-a846-415d-805f-a1a578f65138',
            headers: Cypress.env(),          // traz autorização do env
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('BRUNO VINICIUS SOARES RIBEIRO')
                         
        })
    })

})