import { faker } from '@faker-js/faker'

describe('NotFound', () => {
  beforeEach(function () {
    cy.visit('/')
  })

  it('should redirect the user to 404 if he navigates to a page that does not exist', function () {
    const path = faker.internet.domainSuffix()

    cy.visit(path)

    cy.location().should(loc => expect(loc.pathname).to.eq('/404'))
  })
})
