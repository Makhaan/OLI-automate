    describe('page display on medium size screen',
       {
        viewportHeight: 1000,
        viewportWidth: 1650,
     }, () => {
    it('Storypage', () => {
        cy.visit("https://www.outlookindia.com/traveller")
       cy.contains('Traveller')
       cy.get(':nth-child(5) > .article-hero-list > .category-main > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
       cy.contains('Click here to read the full article')
       cy.go('back')

       cy.get(':nth-child(1) > .article-hero-list > :nth-child(1) > .articles > .row > .order-1 > .article-img-box > a > .article-img').click()
       cy.contains('Click here to read the full article')
       

      cy.visit("https://www.outlookindia.com/traveller/experiences")
      cy.contains('Experiences')

       cy.visit("https://www.outlookindia.com/traveller/stay")
       cy.contains('Stay')

       cy.visit("https://www.outlookindia.com/traveller/whats-new")
       cy.contains('load more stories')

       cy.visit("https://www.outlookindia.com/traveller/editors-picks")
       cy.contains('load more stories')

    
})

})