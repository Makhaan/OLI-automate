
describe('Others',
    {
     viewportHeight: 1200,
     viewportWidth: 1850,
  }, () => {

 it('OutlookHub', () => {
   cy.visit("https://www.outlookindia.com/outlookhub")
   cy.contains('OutlookHub')
   cy.wait(2000)
   cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
   cy.contains('MOST POPULAR')
   cy.wait(3000)
   cy.go('back')

   cy.wait(2000)
   cy.get('#btn-lms-btn-category').click()
   cy.contains('OutlookHub')
   cy.wait(2000)
   cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
   cy.contains('MOST POPULAR')
   cy.wait(3000)
   cy.go('back')
   cy.wait(2000)
   cy.get('#btn-lms-btn-category').click()
   cy.wait(3000)

   cy.get('.breadcrumb > :nth-child(1) > a').click()
   cy.wait(2000)

   })
   it('Hub4Business', () => {
    cy.visit("https://www.outlookindia.com/hub4business")
    cy.contains('Hub4Business')
    cy.wait(3000)
    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.contains('MOST POPULAR')
    cy.wait(4000)
    cy.go('back')
    cy.wait(4000)
    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.contains('MOST POPULAR')
    cy.wait(4000)
    cy.go('back')
    cy.wait(4000)

    cy.get('#btn-lms-btn-category').click()
    cy.contains('Hub4Business')

    cy.get('#btn-lms-btn-category').click()
    cy.contains('Hub4Business')

    cy.get('.breadcrumb > :nth-child(1) > a').click()
    cy.wait(2000)

   })

   it('Hub4Health', () => {
      cy.visit("https://www.outlookindia.com/hub4health")
      cy.contains('Hub4Health')
      cy.wait(3000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)
  
      cy.get('#btn-lms-btn-category').click()
      cy.contains('Hub4Health')
  
      cy.get('#btn-lms-btn-category').click()
      cy.contains('Hub4Health')
  
      cy.get('.breadcrumb > :nth-child(1) > a').click()
      cy.wait(2000)

   })

   it('Outlook-Apprise', () => {
      cy.visit("https://www.outlookindia.com/outlook-apprise")
      cy.contains('Outlook Apprise')
      cy.wait(3000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)

      cy.get('.breadcrumb > :nth-child(1) > a').click()
      cy.wait(2000)

   })

   it('Healthcare-Spotlight', () => {
      cy.visit("https://www.outlookindia.com/healthcare-spotlight")
      cy.contains('Healthcare Spotlight')
      cy.wait(3000)
      cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)
      cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)

      cy.get('#btn-lms-btn-category').click()
      cy.contains('Healthcare Spotlight')

      cy.get('#btn-lms-btn-category').click()
      cy.contains('Healthcare Spotlight')

      cy.get('.breadcrumb > :nth-child(1) > a').click()
      cy.wait(2000)

   })

   it('Tourism-Spotlight', () => {
      cy.visit("https://www.outlookindia.com/tourism-spotlight")
      cy.contains('Tourism Spotlight')
      cy.wait(3000)
      cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)
      cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)

      cy.get('.breadcrumb > :nth-child(1) > a').click()
      cy.wait(2000)

   })

   it('Entertainment-Spotlight', () => {
      cy.visit("https://www.outlookindia.com/entertainment-spotlight")
      cy.contains('Entertainment Spotlight')
      cy.wait(3000)
      cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)
      cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)

      cy.get('#btn-lms-btn-category').click()
      cy.contains('Entertainment Spotlight')

      cy.get('#btn-lms-btn-category').click()
      cy.contains('Entertainment Spotlight')

      cy.get('.breadcrumb > :nth-child(1) > a').click()
      cy.wait(2000)

   })

   it('Hub4Tech', () => {
      cy.visit("https://www.outlookindia.com/hub4tech")
      cy.contains('Hub4Tech')
      cy.wait(3000)
      cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)
      cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)

      cy.get('.breadcrumb > :nth-child(1) > a').click()
      cy.wait(2000)

   })

   it('Hub4Gaming', () => {
      cy.visit("https://www.outlookindia.com/hub4gaming")
      cy.contains('Hub4Gaming')
      cy.wait(4000)

      cy.get('#btn-lms-btn-category').click()
      cy.contains('Hub4Gaming')

      cy.get('.breadcrumb > :nth-child(1) > a').click()
      cy.wait(2000)

   })

   it('Hub4Crypto', () => {
      cy.visit("https://www.outlookindia.com/hub4crypto")
      cy.contains('Hub4Crypto')
      cy.wait(3000)
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)
      
      cy.get('#btn-lms-btn-category').click()
      cy.contains('Hub4Crypto')
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
      cy.contains('MOST POPULAR')
      cy.wait(4000)
      cy.go('back')
      cy.wait(4000)

      cy.get('#btn-lms-btn-category').click()
      cy.contains('Hub4Crypto')

      cy.get('#btn-lms-btn-category').click()
      cy.wait(2000)

      cy.get('.breadcrumb > :nth-child(1) > a').click()
      cy.wait(2000)
   })
})
Cypress.on('uncaught:exception', (err, runnable) => {
 return false
})