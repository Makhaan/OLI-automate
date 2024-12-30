describe('Special', 
    {
      viewportHeight: 1000,
      viewportWidth: 1650,
   }, () => {
  
    it('Lifestyleplug', () => {
              
        cy.visit("https://www.outlookindia.com/lifestyleplug")
        cy.contains('Lifestyle Plug')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-8 > .author > .name > a').click()
        cy.wait(3000)
        cy.contains('articles by')
        cy.go('back')
        cy.get('#btn-lms-btn-category').click()
        cy.contains('Lifestyle Plug')
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        

   })

   it('Playworld Insights', () => {

    cy.visit("https://www.outlookindia.com/playworldinsights")
    cy.contains('Playworld Insights')
    cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-8 > .author > .name > a').click()
        cy.wait(3000)
        cy.contains('articles by')
        cy.go('back')
        cy.get('#btn-lms-btn-category').click()
        cy.contains('Playworld Insights')
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')

   })

   it('Insight Forum', () => {

    cy.visit("https://www.outlookindia.com/insightforum")
    cy.contains('Insight Forum')
    cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-8 > .author > .name > a').click()
        cy.wait(3000)
        cy.contains('articles by')
        cy.go('back')
        cy.get('#btn-lms-btn-category').click()
        cy.contains('Insight Forum')
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')

   })

   it('CryptoLens', () => {

    cy.visit("https://www.outlookindia.com/cryptolens")
    cy.contains('CryptoLens')
    cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-8 > .author > .name > a').click()
        cy.wait(3000)
        cy.contains('articles by')
        cy.go('back')
        cy.get('#btn-lms-btn-category').click()
        cy.contains('CryptoLens')
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')

   })

   it('Care Chronicles', () => {

    cy.visit("https://www.outlookindia.com/carechronicles")
    cy.contains('Care Chronicles')
    cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(1) > .articles > .row > .col-8 > .author > .name > a').click()
        cy.wait(3000)
        cy.contains('articles by')
        cy.go('back')
        cy.get('#btn-lms-btn-category').click()
        cy.contains('Care Chronicles')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')

   })

   it('Wellnessway', () => {

    cy.visit("https://www.outlookindia.com/wellnessway")
    cy.contains('Wellnessway')
    cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .articles > .row > .col-8 > .author > .name > a').click()
        cy.wait(3000)
        cy.contains('articles by')
        cy.go('back')
       
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

  
   Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
    
  })