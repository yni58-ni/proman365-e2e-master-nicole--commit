describe('empty spec', () => {
  it('passes', () => { 
    cy.visit('https://proman-delta.vercel.app/login')
    cy.get('[name=email]')
      .type('shine.sood91@gmail.com')
      .should('have.value','shine.sood91@gmail.com')

      cy.get('[name=password]')
      .type('Legendary')
      .should('have.value','Legendary')

      cy.get('button:contains("Login")').click().should('be.enabled')
  })

  it('fail',()=>{
    cy.visit('https://proman-delta.vercel.app/login')
    cy.get('[name=email]')
      .type('shine.sood91@gmail.com')
      .should('have.value','shine.sood91@gmail.com')

      cy.get('[name=password]')
      .type('wrrrrrrong')
      .should('have.value','wrrrrrrong')

      cy.get('button:contains("Login")').click().should('be.disabled')
  })

})