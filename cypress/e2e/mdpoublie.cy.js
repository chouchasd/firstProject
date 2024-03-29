describe('mdp failed', () => {
    it('mdpforgotten', () => {
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').contains('Forgotten Password').click({force: true})
    })
  })