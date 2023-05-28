///<reference types = "cypress"/>

it('successfull login',function(){

    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').should("be.visible").type('standarduser')
   cy.get('[data-test="password"]').should("be.visible").type('secret_sauce')
   cy.get('[data-test="login-button"]').should("be.visible").click()
})