import { doLogin } from '../../support/utils'

describe('Auth', () => {
  beforeEach(function () {
    cy.fixture('user.json').then(user => {
      this.user = user
    })

    cy.visit('/')
  })

  it('should login successfully and go to home', function () {
    const { username, password } = this.user

    doLogin(username, password)

    cy.location().should(loc => expect(loc.pathname).to.eq('/home'))
  })
})
