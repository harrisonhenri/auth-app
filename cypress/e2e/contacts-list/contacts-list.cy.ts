import { doLogin } from '../../support/utils'

describe('ContactsList', () => {
  beforeEach(function () {
    cy.visit('/')

    cy.fixture('user.json').then(user => {
      const { username, password } = user
      doLogin(username, password)
      cy.get('[data-testid="burguer-menu"]').click()
      cy.get('[data-testid="/contatos"]').click()
    })

    cy.fixture('contact.json').then(contact => {
      this.contact = contact
    })
  })

  it('should add the contact to the contact list successfully', function () {
    const { firstName, id } = this.contact

    cy.get('[data-testid="search-user-text"]').type(firstName)

    cy.get(`[data-testid=add-${id}]`).click()

    cy.get('[data-testid="contacts-list"]')
      .children()
      .should(children => expect(children.length).eq(1))
  })

  it('should remove the contact to the contact list successfully', function () {
    const { firstName, id } = this.contact

    cy.get('[data-testid="search-user-text"]').type(firstName)

    cy.get(`[data-testid=add-${id}]`).click()

    cy.get(`[data-testid=remove-${id}]`).click()

    cy.get('[data-testid="contacts-list"]')
      .children()
      .should(children => expect(children.length).eq(0))
  })
})
