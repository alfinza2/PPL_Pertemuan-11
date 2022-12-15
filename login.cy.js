describe('empty spec', () => {
  it('passes', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://store.steampowered.com')
    cy.get('div#global_action_menu>a').contains('login').click()
    cy.get('input.newlogindialog_TextInput_2eKVn').eq(0).type('PengujianPerangkatLunak')
    cy.get('input.newlogindialog_TextInput_2eKVn').eq(1).type('Passwordsteamppl123')
    cy.get('button.newlogindialog_SubmitButton_2QgFE').contains('Sign in').click()
  })
})