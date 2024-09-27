describe('Outlooktraveller',
    {
     viewportHeight: 1000,
     viewportWidth: 1650,
  }, () => {

    it('Homepage', () => {
    cy.visit("https://www.outlooktraveller.com/")
    cy.get('#header-search > .search-m__search-wrapper__c0iFA > .search-m__search-icon__LhB-k > .svg-handler-m__svg-wrapper__LhbXl > .icon').click()
    cy.get('#header-search > .search-m__search-wrapper__c0iFA > :nth-child(2) > .header-search-form > :nth-child(1) > .search-m__internal-search-wrapper__rZ2t1 > label > [data-testid="search-input"]')
    .type('Place to visit')
    .type('{enter}')
    cy.get(':nth-child(1) > .list-component-m_one-col-border-default__19mC9 > .arr--story-card > .arr--hero-image > .hero-image-m_image-wrapper__2EIzt > .arr--responsive-hero-image > .qt-image').click()
    cy.get('.logoHeight').click()
    cy.get('#header-sidebar').click()
    cy.wait(3000)
    cy.get('#header-sidebar > :nth-child(1) > .side-bar-transition-enter-done > .sidebar-module__overlay__KcW-h').click()
    cy.get('.three-col-six-stories-m_storycards-row-one__lWHtD > :nth-child(1) > .arr--story-card > .arr--hero-image > .hero-image-m_image-wrapper__2EIzt > .arr--responsive-hero-image > .qt-image').click()
    cy.contains('Related Stories')
    cy.go('back')
    cy.get('#row-3 > .full-width-with-padding > .four-col-m_four-col-grid__1EiO7 > .arr--collection-name > a > h2').click()
    cy.contains('min read')
    cy.go('back')
    cy.get('.four-col-portrait-stories-m_four-col-portrait__AtWub > .arr--collection-name > a > h2').click()
    cy.contains('OT Gallery')
    cy.go('back')
    cy.get('#row-7 > .full-width-with-padding > .four-story-slider-m_four-story-slider-wrapper__1WZcd > .arr--collection-name > a > h2').click()
    cy.contains('OT Recommends: Destination Hong Kong')
    cy.go('back')
    cy.get('[style="order: 0;"] > .arr--collection-name > a > h2').click()
    cy.contains('Women in Travel')
    cy.go('back')

    cy.visit("https://www.outlooktraveller.com/collection/ot-journeys")
    cy.contains('OT Journeys')
    cy.wait(3000)
    
    cy.visit("https://www.outlooktraveller.com/experiences")
    cy.contains('Experiences')
    cy.wait(3000)
    
    cy.visit("https://www.outlooktraveller.com/stay")
    cy.contains('Stay')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/whats-new")
    cy.contains('min read')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/editors-picks")
    cy.contains('min read')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/destinations/india")
    cy.contains('India')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/destinations/international")
    cy.contains('International')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/experiences/adventure")
    cy.contains('Adventure')
    cy.wait(3000)
    
    cy.visit("https://www.outlooktraveller.com/experiences/adventure")
    cy.contains('Adventure')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/experiences/heritage")
    cy.contains('Heritage')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/experiences/food-and-drink")
    cy.contains('Food and Drink')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/experiences/shopping")
    cy.contains('Shopping')
    cy.wait(3000)

    
    cy.visit("https://www.outlooktraveller.com/experiences/spiritual")
    cy.contains('Spiritual')
    cy.wait(3000)

    
    cy.visit("https://www.outlooktraveller.com/experiences/places-of-interest")
    cy.contains('Places of Interest')
    cy.wait(3000)

    
    cy.visit("https://www.outlooktraveller.com/experiences/nature")
    cy.contains('Nature')
    cy.wait(3000)

    
    cy.visit("https://www.outlooktraveller.com/stay/luxury")
    cy.contains('Luxury')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/stay/budget")
    cy.contains('Budget')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/stay/homestays")
    cy.contains('Home Stays')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/stay/sustainable")
    cy.contains('Sustainable')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/stay/wellness")
    cy.contains('Wellness')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/editors-picks/celebrating-people")
    cy.contains('Celebrating People')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/hall-of-frame")
    cy.contains('OT hall of frame')
    cy.wait(3000)

    })

    it('Author page', () => {
    cy.visit("https://www.outlooktraveller.com/author/shreya-cheema")
    cy.contains('Shreya Cheema')
    cy.wait(3000)

    cy.visit("https://www.outlooktraveller.com/authors")    
    cy.contains('OUR AUTHORS')
    cy.wait(5000)

    // Verify author that has social links
    })

    it('category', () =>{
    

    })



    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    
        
  })
})