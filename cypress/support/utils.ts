export const doLogin = (username: string, password: string) => {
  cy.get('[data-testid="username"]').type(username)
  cy.get('[data-testid="password"]').type(password)

  cy.get('button').click()
}
