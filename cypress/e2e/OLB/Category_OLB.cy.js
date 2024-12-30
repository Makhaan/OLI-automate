describe('Category page OLB', 
    {
      viewportHeight: 1000,
      viewportWidth: 1650,
   }, () => {
  
    it('homepage', () => {
        cy.visit("https://www.outlookbusiness.com/")
        cy.wait(5000)

        cy.visit("https://www.outlookbusiness.com/markets/india-dominates-global-ipo-market-in-2024-set-to-raise-rs-2-lakh-crore-in-next-year-report")
        cy.wait(100000)
        cy.get('#emailInput').type('asdfghjkl@gmail.com')
        cy.get('#newsletter-form > .mt-2').click()

        cy.get('.text-center > .article-img-box > a > .article-img').click()
        
        cy.contains('MOST POPULAR')
        cy.wait(1000)
        cy.go('back')

        cy.get(':nth-child(3) > .article-heading-one > a').click()
        cy.contains('MOST POPULAR')
        cy.wait(1000)
        cy.go('back')
   })

   it('News', () => {
   cy.visit("https://www.outlookbusiness.com/news")
    cy.wait(3000)
    cy.contains('News')
    // cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    // cy.wait(1000)
    // cy.contains('MOST POPULAR')
    // cy.go('back')
    // cy.wait(2000)

    // cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    // cy.wait(1000)
    // cy.contains('MOST POPULAR')
    // cy.go('back')
    // cy.wait(2000)

    cy.get('.lms-btn').click()
    cy.wait(3000)
    cy.contains('News')
    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(1000)
    cy.contains('MOST POPULAR')
    cy.go('back')
    cy.wait(2000)

    cy.get('.lms-btn').click()
    cy.wait(3000)
    cy.contains('News')
})

it('Magazine', () => {
    cy.visit("https://www.outlookbusiness.com/magazine/business")
    cy.wait(5000)
    cy.get(':nth-child(2) > .magazine-cover-image-m_image__3-ZtB > a > .qt-image').click()
    cy.get(':nth-child(1) > .article-img-box > a > .article-img').click()
    cy.go('back')
    cy.wait(1000)

    cy.get('.mt-4 > .col-12 > .article-hero-list > :nth-child(1) > .articles > .row > .col-8 > .article-heading-two > a').click()
    cy.wait(1000)
    cy.go('back')

    cy.get('.mt-4 > .col-12 > .article-hero-list > :nth-child(1) > .articles > .row > .col-8 > .author > .name > a').click()
    cy.wait(1000)
    cy.go('back')
})

it('In-Depth', () => {
    cy.visit("https://www.outlookbusiness.com/in-depth")
    cy.wait(5000)
    cy.contains('OB Analysis')

    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(1000)
    cy.go('back')

    cy.get(':nth-child(1) > .articles > .row > .col-8 > .author > .name > a').click()
    cy.wait(2000)
    cy.go('back')

    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(1000)
    cy.go('back')

    cy.get(':nth-child(2) > .articles > .row > .col-8 > .author > .name > a').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('.lms-btn').click()
    cy.contains('OB Analysis')
    cy.wait(3000)
    
    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(1000)
    cy.go('back')

    cy.get(':nth-child(1) > .articles > .row > .col-8 > .author > .name > a').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('.lms-btn').click()
    cy.contains('OB Analysis')
    cy.wait(3000)

})

it('Magazine', () => {

 })

   Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
    
  })