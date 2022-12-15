describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://store.steampowered.com')
    cy.get('span.pulldown').eq(3).trigger('mouseover')
    cy.get("a[class=popup_menu_item]").contains('Free to Play').click()
  })
})