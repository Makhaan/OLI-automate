describe('Sports Category', 
    {
      viewportHeight: 1000,
      viewportWidth: 1650,
   }, () => {
  
    it('Sports page', () => {
            cy.visit("https://www.outlookindia.com/sports")
            cy.get('.br-grey > .articles > .row > .order-1 > .article-img-box > a > .article-img').click()
            //cy.contains('MOST POPULAR')
            cy.wait(3000)
            cy.go('back')

            cy.get(':nth-child(1) > .articles > .row > .col-8 > .article-heading-one > a').click()
            cy.contains('MOST POPULAR')
            cy.wait(3000)
            cy.go('back')

            cy.get('.mt-4 > .article-hero-list > :nth-child(2) > .articles > .row > .col-8 > .author > .name > a').click()
            cy.contains('articles by')
            cy.wait(3000)
            cy.go('back')

            cy.get('.slick-next').click()
            cy.wait(2000)

            cy.get('.slick-prev').click()
            cy.wait(3000)

            cy.get('.slick-current > :nth-child(1) > .col-12 > a > .photos-random > .text').click()
            
  
   })
  
  
   Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
    
  })