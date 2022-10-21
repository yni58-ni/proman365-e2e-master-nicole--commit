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

  it('negative',()=>{
    cy.visit('https://proman-delta.vercel.app/login')
    cy.get('[name=email]')
      .type('shine.sood91@gmail.com')
      .should('have.value','shine.sood91@gmail.com')

      cy.get('[name=password]')
      .type('wrrrrrrong')
      .should('have.value','wrrrrrrong')

      cy.get('button:contains("Login")').click().should('be.disabled')
  })

  it('negative',()=>{
    cy.visit('https://proman-delta.vercel.app/login')
    cy.get('[name=email]')
      .type('sood91@gmail.com')
      .should('have.value','sood91@gmail.com')

      cy.get('[name=password]')
      .type('Legendary')
      .should('have.value','Legendary')

      cy.get('button:contains("Login")').click().should('be.disabled')
  })

  it('negative',()=>{
    cy.visit('https://proman-delta.vercel.app/login')
    cy.get('[name=email]')
      .type('sood91@gmail.com')
      .should('have.value','sood91@gmail.com')

      cy.get('[name=password]')
      .type('wrrrrrrong')
      .should('have.value','wrrrrrrong')

      cy.get('button:contains("Login")').click().should('be.disabled')
  })

  it('negative',()=>{
    cy.visit('https://proman-delta.vercel.app/login')
    cy.get('[name=email]')
      .type('23')
      .should('have.value','23')

      cy.get('[name=password]')
      .type('Legendary')
      .should('have.value','Legendary')

      cy.get('[name=email]')
      .should('contain','@')
  })

})