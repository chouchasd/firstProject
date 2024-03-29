describe('login', () => {
    let UserPsw
    let UserEmail
    before(() => { 
      UserPsw='choucha94';
      UserEmail='chaimasdiri2@gmail.com';
    })
    beforeEach(() => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.get('a[href="#mz-component-1626147655"]').should('be.visible')
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(' My account').trigger('mouseover',{force: true})
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').click({force: true})
      cy.get('input[name="email"]').type('chaimasdiri2@gmail.com')
      cy.get('input[name="password"]').type('chouchasd')
      cy.get('input[value="Login"]').click()
    })
    /*
    it ('create', () => {
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(' My account').trigger('mouseover',{force: true})
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').click({force: true})
      cy.get('input[name="firstname"]').type('Chaima')
      cy.get('input[name="lastname"]').type('Sdiri')
      cy.get('input[name="email"]').type('chaimasdiri2@gmail.com')
      cy.get('input[name="telephone"]').type('95641288')
      cy.get('input[name="password"]').type('chouchasd')
      cy.get('input[name="confirm"]').type('chouchasd')
      cy.get('label[for="input-newsletter-no"]').click()
      cy.get('label[for="input-agree"]').click()
      cy.get('input[value="Continue"]').click()
    })
  it ('login', () => {
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(' My account').trigger('mouseover',{force: true})
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').click({force: true})
    cy.get('input[name="email"]').type('chaimasdiri2@gmail.com')
    cy.get('input[name="password"]').type('chouchasd')
    cy.get('input[value="Login"]').click()
  }) */
  
  it('Add', () => {
    cy.get('input[data-autocomplete_route="extension/maza/product/product/autocomplete"]').type('HTC')
    cy.get('button[type="submit"]').contains('Search').click()
    cy.get('button[title="Add to Wish List"]').contains('Add to Wish List').click({force: true})
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist')

  })
})

