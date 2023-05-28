///<reference types = "cypress"/>

it('Add items to cart',function(){

    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').should("be.visible").type('standard_user')
   cy.get('[data-test="password"]').should("be.visible").type('secret_sauce')
   cy.get('[data-test="login-button"]').should("be.visible").click()

   cy.get('[#add-to-cart-sauce-labs-backpack]').should("be.visible").click
   cy.get('[.shopping_cart_badge]').should("be.visible").click

   cy.get('[data-test="checkout"]').should('be.visible').click()

   cy.get('[data-test="first-name"]').type('standard')
   cy.get('[data-test="last-name"]').type('user')
   cy.get('[data-test="postal-code"]').type('11321')

   cy.get('[data-test=".continue"]').should('be.visible').click()


   
})