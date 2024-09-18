
    describe('page display on medium size screen',
       {
        viewportHeight: 1000,
        viewportWidth: 1650,
     }, () => {
        
    it('Storypage', () => {
        cy.visit("https://www.outlookindia.com/national/manipur-violence-prohibitory-orders-imphal-valley-thoubal-student-protests-deadline-demands")
        cy.contains('Manipur Violence:')
        cy.get(':nth-child(4) > :nth-child(3) > .sb-text > .sb-also-read > .row > .col-7 > .article-heading-one').click()
        cy.contains('Fresh Violence Brews In Manipur')
        cy.go('back')
        cy.get(':nth-child(6) > :nth-child(3) > .sb-text > .sb-also-read > .row > .col-5 > .article-img-box > a > .article-img').click()
        cy.contains('Manipur CM Biren Singh On Drone Attacks On Civilians')
        cy.go('back')
      })

       
        
})
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})