describe('Home', () => {
  beforeEach(function () {
    cy.fixture('user.json').then(user => {
      this.user = user
    })

    cy.visit('/')
  })

  it('should be redirected to home if the user is logged in', function () {
    const { username, password } = this.user

    cy.get('[data-testid="username"]').type(username)
    cy.get('[data-testid="password"]').type(password)

    cy.get('button').click()

    cy.location().should(loc => expect(loc.pathname).to.eq('/home'))

    cy.visit('/')

    cy.location().should(loc => expect(loc.pathname).to.eq('/home'))
  })

  it('should show the user avatar when the user is at home', function () {
    const { username, password, image } = this.user

    cy.get('[data-testid="username"]').type(username)
    cy.get('[data-testid="password"]').type(password)

    cy.get('button').click()

    cy.get('img').should('have.attr', 'src', image)
  })

  it('should show the navbar when the user clicks on it', function () {
    const { username, password } = this.user

    cy.get('[data-testid="username"]').type(username)
    cy.get('[data-testid="password"]').type(password)

    cy.get('button').click()

    cy.get('[data-testid="burguer-menu"]').click()

    cy.get('nav')
      .children()
      .should(children => expect(children.length).eq(3))
  })

  it('should sign out the user and clear the local storage', function () {
    const { username, password } = this.user

    cy.get('[data-testid="username"]').type(username)
    cy.get('[data-testid="password"]').type(password)

    cy.get('button').click()

    cy.get('[data-testid="burguer-menu"]').click()

    cy.get('[data-testid="sign-out-button"]').click()

    cy.location().should(loc => expect(loc.pathname).to.eq('/'))
    cy.window().should(window =>
      expect(JSON.parse(window.localStorage.getItem('persist:root'))).deep.eq({
        authSlice: '{}',
        _persist: '{"version":-1,"rehydrated":true}',
      }),
    )
  })
})
