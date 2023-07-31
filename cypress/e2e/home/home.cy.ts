import { doLogin } from '../../support/utils'

describe('Home', () => {
  beforeEach(function () {
    cy.visit('/')

    cy.fixture('user.json').then(user => {
      const { username, password } = user
      doLogin(username, password)
      this.image = user.image
    })
  })

  it('should be redirected to home if the user is logged in', function () {
    cy.location().should(loc => expect(loc.pathname).to.eq('/home'))

    cy.visit('/')

    cy.location().should(loc => expect(loc.pathname).to.eq('/home'))
  })

  it('should show the user avatar when the user is at home', function () {
    cy.get('img').should('have.attr', 'src', this.image)
  })

  it('should show the navbar when the user clicks on it', function () {
    cy.get('[data-testid="burguer-menu"]').click()

    cy.get('nav')
      .children()
      .should(children => expect(children.length).eq(3))
  })

  it('should sign out the user and clear the local storage', function () {
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
