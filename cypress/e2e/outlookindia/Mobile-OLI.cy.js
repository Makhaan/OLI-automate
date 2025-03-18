describe('Test', 
    {
      viewportHeight: 932,
      viewportWidth: 430,
   }, () => {
  
    it('HomePage', () => {
        cy.visit("https://www.outlookindia.com")
        cy.wait(5000)
        cy.get('.navbar-toggler > .d-block').click()
        cy.get('#searchInputNavMobile').type('Haryana')
        cy.get('#searchButtonNavMobile > img').click()
        cy.contains('results')
        cy.get('.lms-btn').click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(2000)
        cy.get('.text-center > .article-img-box > a > .article-img').click()
        cy.contains('Updated on:')
        cy.wait(3000)
        cy.go('back')
        cy.get('.text-center > .author > .name > a').click()
        cy.go('back')
        cy.wait(2000)
        cy.get(':nth-child(2) > .articles > .article-img-box > a > .article-img').click()
       // cy.contains('Updated on:')
        cy.wait(3000)
        cy.go('back')
        cy.get(':nth-child(2) > .articles > .article-img-box > a > .article-img').click()
        cy.contains('Updated on:')
        cy.wait(3000)
        cy.go('back')

        // National
        cy.get(':nth-child(5) > .row.justify-content-center > .col-lg-9 > .category-head > .more > a').click()
        cy.contains('National')
        cy.wait(3000)
        cy.get('.slick-next').click()
        cy.wait(2000)
        cy.get('.slick-prev').click()
        cy.wait(2000)
        cy.get('#load-more-button-category').click()
        cy.contains('National')
        cy.wait(2000)
        cy.go('back')
        cy.go('back')
        cy.wait(3000)

        // International
        cy.get(':nth-child(6) > .row.justify-content-center > .col-lg-9 > .category-head > .more > a').click()
        cy.contains('International')
        cy.wait(2000)
        cy.get('.slick-next').click()
        cy.wait(2000)
        cy.get('.slick-prev').click()
        cy.wait(2000)
        cy.get('#load-more-button-category').click()
        cy.contains('International')
        cy.wait(2000)
        cy.go('back')
        cy.go('back')
        cy.wait(3000)

        // LONG READ
        cy.get(':nth-child(8) > .row.justify-content-center > .col-lg-9 > .category-head > .more > a').click()
        //cy.contains('Long Reads')
        cy.wait(2000)
        cy.go('back')
        // Slick-Slider
        

        

   })
   Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })

  })