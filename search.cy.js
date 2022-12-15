describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://store.steampowered.com')
    cy.get('div.searchbox>input').type('sea of thieves')
    cy.get("a[href='https://store.steampowered.com/app/1172620/Sea_of_Thieves?snr=1_7_15__13']").click()
  })
})