import { expect } from "chai"

describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwZmE1NjcyYy00ZjFmLTRmZWItOTE4MC0yMWQzYzYyNTgzNWQiLCJhZG9wdGVyTmFtZSI6IkJydW5vIiwiaWF0IjoxNzIzODk4MDQxLCJleHAiOjE3MjQxNTcyNDF9.F_8mdi2k1yJNAVl_FhI0KHPP7-KRhz0Y0AzaO4mmpzM`

    it('Mensagens da API', () => {
        cy.request({    //metodo que recebe propriedades
            method:'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/0fa5672c-4f1f-4feb-9180-21d3c625835d',
            headers: {authorization}, 
        }).then((res) => {
            expect(res.status).to.be.equal(200) //vai esperar uma resposta do status e essa resposta precisa ser igual a 200
            expect(res.body).is.not.empty    //espera que o body da requisição não seja vazio
            expect(res.body).to.have.property('msg') //espera que o body traga a propriedade que tenha no nde msg
        })
    })

})