describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://store.steampowered.com')
    cy.get('div#global_action_menu>span').click()
    cy.get('div.popup_block_new>div>a').eq(4).click()
  })
})