describe('Test', 
  {
    viewportHeight: 1000,
    viewportWidth: 1650,
 }, () => {

  it('International page', () => {
    cy.visit("https://www.outlookindia.com/international")
    cy.contains('International')
    cy.wait(2000)
    cy.get('.br-grey > .articles > .row > .order-1 > .article-img-box > a > .article-img').click()
    cy.contains('MOST POPULAR')
    cy.wait(3000)
    cy.go('back')
    cy.wait(2000)
    cy.contains('International')
    cy.get('.slick-next').click()
    cy.wait(2000)
    cy.get('.slick-prev').click()
    cy.get('.more > a').click()
    cy.contains('International Photo')
    cy.wait(2000)
    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(3000)
    cy.go('back')

})

            // cy.get(':nth-child(2) > .br-grey > .article-hero-list > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            // cy.contains('MOST POPULAR')
            // cy.go('back')
            // cy.get('#btn-lms-btn-category').click()
            // cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            // cy.contains('MOST POPULAR')
            // cy.go('back')


 })

 Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})