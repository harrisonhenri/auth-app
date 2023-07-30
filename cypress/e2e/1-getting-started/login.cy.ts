describe('Auth', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays two todo items by default', () => {
    cy.get('h4').should('have.text', 'Login')
  })
})
