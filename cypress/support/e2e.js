// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
beforeEach(() => {
    cy.visit('https://ecommerce-playground.lambdatest.io/')
    cy.get('a[href="#mz-component-1626147655"]').should('be.visible')
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(' My account').trigger('mouseover',{force: true})
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').click({force: true})
    cy.get('input[name="email"]').type('chaimasdiri2@gmail.com')
  })

// Alternatively you can use CommonJS syntax:
// require('./commands')