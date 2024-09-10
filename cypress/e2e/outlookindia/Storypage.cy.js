    describe('page display on medium size screen',
       {
        viewportHeight: 1000,
        viewportWidth: 1650,
     }, () => {
    it('Storypage', () => {
        cy.visit("https://www.outlookindia.com/traveller")
       cy.wait(1000)

       cy.visit("https://www.outlookindia.com/traveller/experiences")
       cy.wait(1000)

       cy.visit("https://www.outlookindia.com/traveller/stay")
       cy.wait(1000)

       cy.visit("https://www.outlookindia.com/traveller/whats-new")
       cy.wait(1000)

       cy.visit("https://www.outlookindia.com/traveller/editors-picks")
       cy.wait(1000)

    
})

})