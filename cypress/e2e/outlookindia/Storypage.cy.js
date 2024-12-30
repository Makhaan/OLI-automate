
    describe('page display on medium size screen',
       {
        viewportHeight: 1200,
        viewportWidth: 1850,
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
        cy.wait(2000)
        cy.get('.auth-div-button').click()
        cy.contains('Outlook Web Desk')
        cy.wait(2000)
        cy.go('back')
        cy.go('back')
        // cy.get(':nth-child(1) > .story-listing-head > a').click()
        // cy.contains('MOST POPULAR')
        // cy.wait(2000)
        // cy.go('back')
        // cy.get(':nth-child(1) > .row > :nth-child(1) > .rhs-video-list > :nth-child(2) > .w-100').click()
        // cy.contains('MOST POPULAR')
        // cy.wait(2000)
        // cy.go('back')
        // cy.get(':nth-child(1) > .row > :nth-child(1) > a > .w-100').click()
        // cy.contains('MOST POPULAR')
        // cy.wait(2000)
        // cy.go('back')
        // cy.get('.tags > :nth-child(2) > ul > :nth-child(1) > a').click()
        // cy.contains('Jammu And Kashmir Elections')
        // cy.wait(2000)
        // cy.go('back')
        // cy.get('.prev > a > span').click()
        // cy.contains('MOST POPULAR')
        // cy.wait(2000)
        // cy.go('back')
        // cy.get('.next > a > span').click()
        // cy.contains('MOST POPULAR')
        // cy.wait(2000)
        // cy.go('back')

      })

})
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})