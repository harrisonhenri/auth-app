describe('Auth', () => {
  beforeEach(function () {
    cy.fixture('user.json').then(user => {
      this.user = user
    })

    cy.visit('/')
  })

  it('should login successfully and go to home', function () {
    const { username, password } = this.user

    cy.get('[data-testid="username"]').type(username)
    cy.get('[data-testid="password"]').type(password)

    cy.get('button').click()

    cy.location().should(loc => expect(loc.pathname).to.eq('/home'))
  })
})
