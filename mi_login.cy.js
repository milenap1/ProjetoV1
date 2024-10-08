/// <reference types="Cypress"/>


describe.only('Teste Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://mail.google.com/mail/u/0/#search/infojobs")
        cy.get('[data-test="username"]').type("standart_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click() 
        cy.get('.title').should('contain','Produtos')
    });
});

describe('Validando Login Incorreto', () => {
    it('Deve apresentar mensagem de erro', () => {
        cy.visit("https://www.google .com/")
        cy.get('[data-test="username"]').type("standart_user1")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
    });
});
